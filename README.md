# OpenClaw 技能库

🚀 一个展示 191+ 专业 AI Agent 技能的静态网站，覆盖工程、设计、营销、产品等多个领域。

![技能展示](https://img.shields.io/badge/技能数量-191+-blue)
![分类](https://img.shields.io/badge/分类-10+-green)
![开源](https://img.shields.io/badge/开源-MIT-orange)

## 📖 项目简介

OpenClaw 技能库是一个用于展示和管理 AI Agent 技能的静态网站。每个技能都包含完整的定义文件，支持在线预览和下载。

## ✨ 功能特性

- 🔍 **实时搜索** - 支持按名称、描述、标签搜索技能
- 🏷️ **分类筛选** - 10 大分类，快速定位所需技能
- 📖 **Markdown 渲染** - 在线预览技能文件内容
- 📦 **一键下载** - ZIP 打包下载技能所有文件
- 📱 **响应式设计** - 适配桌面和移动端
- 🌙 **深色主题** - 现代化深色 UI 设计

## 📁 技能文件结构

每个技能都是一个独立的目录，包含以下三个核心文件：

```
skill-name/
├── AGENTS.md     # 核心定义与工作规范
├── SOUL.md       # 身份与性格设定
└── IDENTITY.md   # 简短身份标识
```

### 文件说明

| 文件 | 说明 |
|------|------|
| `AGENTS.md` | 定义 Agent 的核心使命、工作流程、技术交付物和成功指标 |
| `SOUL.md` | 定义 Agent 的角色定位、个性特征、沟通风格和关键规则 |
| `IDENTITY.md` | 用一两句话概括 Agent 的身份和专业领域 |

## 🗂️ 技能分类

| 分类 | 说明 |
|------|------|
| 工程开发 | 后端、前端、AI、DevOps、安全等 |
| 设计 | UI、UX、品牌、视觉设计等 |
| 营销 | 内容创作、社交媒体、SEO、电商运营等 |
| 产品 | 产品经理、用户研究、需求分析等 |
| 财务 | 财务预测、欺诈检测、发票管理等 |
| 测试 | API 测试、性能测试、QA 等 |
| 游戏开发 | Unity、Unreal、Godot、Roblox 等 |
| 销售 | 客户策略、售前支持、渠道管理等 |
| 专业服务 | 咨询、翻译、会议助理等 |
| 其他 | HR、法务、供应链、XR 等 |

## 🚀 快速开始

### 在线访问

直接打开 `index.html` 文件即可在浏览器中查看。

### 本地运行

```bash
# 克隆仓库
git clone https://github.com/willisfeng/OpenClaw-Skills.git

# 进入目录
cd OpenClaw-Skills

# 用浏览器打开 index.html
# 或者使用本地服务器
npx serve .
```

## 🔧 开发指南

### 更新技能数据

当技能文件有更新时，运行以下命令重新生成数据文件：

```bash
node build-data.js
```

### 添加新技能

1. 创建新的技能目录
2. 添加 `AGENTS.md`、`SOUL.md`、`IDENTITY.md` 文件
3. 在 `index.html` 的 `skills` 数组中添加技能信息
4. 运行 `node build-data.js` 更新数据

## 📦 项目结构

```
.
├── index.html          # 主页面
├── build-data.js       # 数据构建脚本
├── skills-data.js      # 生成的技能数据
├── README.md           # 项目说明
├── engineering-*/      # 工程类技能目录
├── design-*/           # 设计类技能目录
├── marketing-*/        # 营销类技能目录
├── product-*/          # 产品类技能目录
├── finance-*/          # 财务类技能目录
├── testing-*/          # 测试类技能目录
├── game-*/             # 游戏类技能目录
├── sales-*/            # 销售类技能目录
├── specialized-*/      # 专业服务类技能目录
└── ...                 # 其他技能目录
```

## 🛠️ 技术栈

- **前端**: HTML5, CSS3, JavaScript (原生)
- **Markdown 渲染**: [marked.js](https://marked.js.org/)
- **ZIP 打包**: [JSZip](https://stuk.github.io/jszip/)
- **设计**: 深色主题，响应式布局

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**OpenClaw Integration** - 让 AI Agent 更智能
