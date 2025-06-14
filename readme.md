# 前后端分离项目脚手架

包含两个模块：
- **client**：React 18 + TypeScript 前端，使用 Vite 构建
- **server**：Express + MongoDB 后端，使用 TypeScript 开发

## 运行步骤

### 前端
```
cd client
pnpm run dev
```
- 前端默认运行在 http://localhost:5173

### 后端
```
cd server
pnpm run dev
```

- 后端默认运行在 http://localhost:4000
- 可以在.env中配置端口

## 技术栈
- 前端：React 18, TypeScript, Vite
- 后端：Express 5, MongoDB (Mongoose), TypeScript
- 工具：pnpm, nodemon, ts-node



## 注意事项
- .gitignore中已经忽略了client/node_modules 和 server/node_modules，避免提交依赖文件。
- 后端可能需安装 @types/cors 解决 TS 类型缺失问题