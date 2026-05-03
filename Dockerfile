# Stage 1: Build
FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve the built Cloudflare Worker bundle locally via wrangler.
# The app is built with the Cloudflare Vite plugin, so the output is a
# Worker bundle (not a Node server). `wrangler dev --local` runs it in a
# local workerd runtime, which is the supported way to self-host.
FROM node:22-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev && npm install wrangler --no-save

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/wrangler.jsonc ./wrangler.jsonc

EXPOSE 80

CMD ["npx", "wrangler", "dev", "--ip", "0.0.0.0", "--port", "80", "--local"]
