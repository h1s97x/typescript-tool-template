# TypeScript Tool Template

TypeScript 工具库模板 - 适用于创建 npm 包、CLI 工具、函数库等 TypeScript 项目。

## 📦 包含内容

- ✅ TypeScript + Node.js 20
- ✅ Jest 测试框架 +覆盖率报告
- ✅ ESLint + Prettier 代码规范
- ✅ Changesets 版本管理
- ✅ GitHub Actions CI/CD
- ✅ 自动发布到 npm

## 🚀 快速开始

### 使用模板创建新项目

1. 点击 **"Use this template"** 按钮
2. 输入新项目名称
3. 修改 `package.json` 中的包名

### 本地开发

```bash
git clone https://github.com/h1s97x/typescript-tool-template.git
cd typescript-tool-template
npm install
```

### 开发命令

```bash
npm run build   # 编译 TypeScript
npm run test    # 运行测试
npm run lint    # 代码检查
npm run format  # 格式化代码
npm run all     # 执行全部检查
```

## 📁 项目结构

```
.
├── .github/
│   └── workflows/
│       ├── ci.yml       # CI 工作流
│       └── release.yml   # 发布工作流
├── src/
│   ├── index.ts          # 入口文件
│   └── utils.ts          # 工具函数
├── test/
│   └── index.test.ts     # 测试文件
├── package.json
├── tsconfig.json
├── .eslintrc.js
├── .prettierrc
└── README.md
```

## 📖 发布流程

1. 安装 Changesets：`npm install -D @changesets/cli`
2. 初始化：`npx changeset init`
3. 创建版本：`npx changeset`
4. 发布：`npx changeset publish`

## 📝 License

MIT
