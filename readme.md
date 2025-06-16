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
- 前端默认运行在 http://localhost:3001

### 后端
```
cd server
pnpm run dev
```

- 后端默认运行在 http://localhost:3000
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


















## 简单的React前端结构实例
```
client/
├── public/
│   ├── favicon.ico
│   └── index.html
│
├── src/
│   ├── components/             # 组件
│   │   ├── common/             # 通用组件
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Loading.tsx
│   │   │   └── index.ts
│   │   └── layout/             # 布局组件
│   │       ├── Header.tsx
│   │       ├── Sidebar.tsx
│   │       └── Layout.tsx
│   │
│   ├── pages/                  # 页面
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Profile.tsx
│   │   └── NotFound.tsx
│   │
│   ├── hooks/                  # 自定义 Hooks
│   │   ├── useAuth.ts
│   │   ├── useApi.ts
│   │   └── useLocalStorage.ts
│   │
│   ├── services/               # API 服务
│   │   ├── api.ts              # API 客户端
│   │   ├── auth.ts
│   │   └── user.ts
│   │
│   ├── store/                  # 状态管理 (Zustand)
│   │   ├── authStore.ts
│   │   ├── userStore.ts
│   │   └── index.ts
│   │
│   ├── utils/                  # 工具函数
│   │   ├── constants.ts
│   │   ├── helpers.ts
│   │   └── validators.ts
│   │
│   ├── types/                  # 类型定义
│   │   ├── auth.ts
│   │   ├── user.ts
│   │   └── api.ts
│   │
│   ├── styles/                 # 样式
│   │   ├── globals.css
│   │   └── components.css
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── .env
├── .env.example
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```




## 完整的express后端架构示例
```
server/
├── src/
│   ├── config/             # 配置文件
│   │   ├── database.ts     # 数据库配置
│   │   ├── redis.ts        # Redis 配置
│   │   ├── jwt.ts          # JWT 配置
│   │   └── swagger.ts      # API 文档配置
│   │
│   ├── controllers/        # 控制器层
│   │   ├── auth.controller.ts
│   │   ├── user.controller.ts
│   │   ├── post.controller.ts
│   │   └── index.ts        # 导出所有控制器
│   │
│   ├── services/           # 业务逻辑层
│   │   ├── auth.service.ts
│   │   ├── user.service.ts
│   │   ├── post.service.ts
│   │   ├── email.service.ts
│   │   └── index.ts
│   │
│   ├── models/             # 数据模型
│   │   ├── User.model.ts
│   │   ├── Post.model.ts
│   │   ├── Comment.model.ts
│   │   └── index.ts
│   │
│   ├── routes/             # 路由定义
│   │   ├── auth.routes.ts
│   │   ├── user.routes.ts
│   │   ├── post.routes.ts
│   │   └── index.ts        # 路由入口
│   │
│   ├── middleware/         # 中间件
│   │   ├── auth.middleware.ts      # 认证中间件
│   │   ├── validation.middleware.ts # 数据验证
│   │   ├── cors.middleware.ts      # CORS 处理
│   │   ├── rate-limit.middleware.ts # 限流
│   │   ├── error.middleware.ts     # 错误处理
│   │   ├── logger.middleware.ts    # 日志记录
│   │   └── upload.middleware.ts    # 文件上传
│   │
│   ├── validators/         # 数据验证规则
│   │   ├── auth.validator.ts
│   │   ├── user.validator.ts
│   │   ├── post.validator.ts
│   │   └── common.validator.ts
│   │
│   ├── types/              # TypeScript 类型定义
│   │   ├── auth.types.ts
│   │   ├── user.types.ts
│   │   ├── post.types.ts
│   │   ├── common.types.ts
│   │   └── express.d.ts    # Express 类型扩展
│   │
│   ├── utils/              # 工具函数
│   │   ├── response.util.ts        # 统一响应格式
│   │   ├── crypto.util.ts          # 加密工具
│   │   ├── date.util.ts            # 日期处理
│   │   ├── file.util.ts            # 文件处理
│   │   ├── validation.util.ts      # 验证工具
│   │   └── constants.ts            # 常量定义
│   │
│   ├── database/           # 数据库相关
│   │   ├── connection.ts   # 数据库连接
│   │   ├── seeds/          # 种子数据
│   │   │   ├── user.seed.ts
│   │   │   └── index.ts
│   │   └── migrations/     # 数据迁移（如使用 Prisma）
│   │
│   ├── jobs/               # 定时任务/队列任务
│   │   ├── email.job.ts
│   │   ├── cleanup.job.ts
│   │   └── scheduler.ts
│   │
│   ├── sockets/            # WebSocket 处理
│   │   ├── chat.socket.ts
│   │   ├── notification.socket.ts
│   │   └── index.ts
│   │
│   └── app.ts              # Express 应用配置
│   └── server.ts           # 服务器启动文件
│
├── tests/                  # 测试文件
│   ├── unit/               # 单元测试
│   │   ├── controllers/
│   │   ├── services/
│   │   └── utils/
│   ├── integration/        # 集成测试
│   ├── fixtures/           # 测试数据
│   └── setup.ts            # 测试配置
│
├── docs/                   # 文档
│   ├── api/                # API 文档
│   ├── deployment/         # 部署文档
│   └── README.md
│
├── scripts/                # 脚本文件
│   ├── build.sh
│   ├── deploy.sh
│   ├── seed-db.ts
│   └── clear-cache.ts
│
├── logs/                   # 日志文件
│   ├── error.log
│   ├── combined.log
│   └── access.log
│
├── uploads/                # 上传文件存储
│   ├── images/
│   ├── documents/
│   └── temp/
│
├── .env                    # 环境变量
├── .env.example            # 环境变量示例
├── .gitignore
├── package.json
├── tsconfig.json           # TypeScript 配置
├── nodemon.json           # Nodemon 配置
├── jest.config.js         # Jest 测试配置
├── Dockerfile
├── docker-compose.yml
└── README.md
```