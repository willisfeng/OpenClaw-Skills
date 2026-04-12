#!/usr/bin/env node
/**
 * 构建技能数据文件
 * 读取所有技能目录下的 MD 文件，生成 skills-data.js
 */

const fs = require('fs');
const path = require('path');

const skillsDir = __dirname;
const output = [];

// 获取所有技能目录
const entries = fs.readdirSync(skillsDir, { withFileTypes: true });
const skillDirs = entries.filter(e => e.isDirectory() && !e.name.startsWith('.') && !e.name.startsWith('_'));

console.log(`发现 ${skillDirs.length} 个技能目录`);

for (const dir of skillDirs) {
    const skillId = dir.name;
    const skillPath = path.join(skillsDir, dir.name);
    
    const skillData = {
        id: skillId,
        files: {}
    };
    
    // 读取三个文件
    const files = ['AGENTS.md', 'SOUL.md', 'IDENTITY.md'];
    for (const fileName of files) {
        const filePath = path.join(skillPath, fileName);
        try {
            let content = fs.readFileSync(filePath, 'utf-8');
            // 转义特殊字符以安全地嵌入 JSON
            skillData.files[fileName] = content;
        } catch (err) {
            // 文件不存在，跳过
            console.log(`  [跳过] ${skillId}/${fileName} - 文件不存在`);
        }
    }
    
    // 至少有一个文件才添加
    if (Object.keys(skillData.files).length > 0) {
        output.push(skillData);
        console.log(`  [完成] ${skillId}`);
    }
}

// 生成 JavaScript 文件
const jsonStr = JSON.stringify(output);
const jsContent = `// 自动生成的技能数据文件
// 生成时间: ${new Date().toISOString()}
// 技能数量: ${output.length}

const skillsData = ${jsonStr};

// 导出供 HTML 使用
if (typeof window !== 'undefined') {
    window.skillsData = skillsData;
}
`;

fs.writeFileSync(path.join(skillsDir, 'skills-data.js'), jsContent, 'utf-8');
console.log(`\n✅ 成功生成 skills-data.js`);
console.log(`   技能数量: ${output.length}`);
