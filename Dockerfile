# Stage 1: Build
FROM node:22-bookworm-slim AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Run Node server
FROM node:22-bookworm-slim
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist

EXPOSE 3000
ENV PORT=3000
ENV HOST=0.0.0.0

CMD ["node", "dist/server/server.js"]
