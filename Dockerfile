# Stage 1: Build
FROM node:22-bookworm-slim AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Run with Wrangler
FROM node:22-bookworm-slim
WORKDIR /app

COPY package*.json ./
RUN npm ci && \
    npm install --no-save --prefer-offline @cloudflare/workerd-linux-64 && \
    chmod +x node_modules/@cloudflare/workerd-linux-64/bin/workerd

COPY --from=builder /app/dist ./dist

EXPOSE 80

WORKDIR /app/dist/server
CMD ["npx", "wrangler", "dev", "--port", "80", "--ip", "0.0.0.0"]
