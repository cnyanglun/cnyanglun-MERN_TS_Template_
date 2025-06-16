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

## Dokcer 容器运行
```
docker-compose build --no-cache	—— 打包
docker-compose up -d --build 		—— 一键启动打包的镜像容器（后端执行）
docker-compose up --build			—— 一键启动打包的镜像容器（直接显示状态）

docker-compose stop				—— 暂停容器
docker-compose down -v			—— 删除容器和数据卷
docker-compose down --rmi all 		——  删除之前打包的镜像
```


## 注意事项
- .gitignore中已经忽略了client/node_modules 和 server/node_modules，避免提交依赖文件。
- 后端可能需安装 @types/cors 解决 TS 类型缺失问题