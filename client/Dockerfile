# 使用 Node.js 官方镜像
FROM node:20-alpine

# 设置工作目录
WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm

# 复制 package.json 和 pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# 安装依赖
RUN pnpm install

# 复制源代码
COPY . .

# 暴露端口
EXPOSE 3001

# 开发环境启动命令 (只指定主机，端口使用 vite.config.ts 中的配置)
CMD ["pnpm", "run", "dev", "--", "--host", "0.0.0.0"]