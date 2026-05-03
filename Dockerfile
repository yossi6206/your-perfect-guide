# Stage 1: Build
FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Run with Wrangler (Cloudflare Workers local runtime)
# This app is a TanStack Start SSR app — HTML is rendered by the Worker,
# not from a static index.html, so nginx alone cannot serve it.
FROM node:22-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY --from=builder /app/dist ./dist

EXPOSE 80

WORKDIR /app/dist/server
CMD ["npx", "wrangler", "dev", "--port", "80", "--ip", "0.0.0.0"]
