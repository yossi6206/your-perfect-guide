# Stage 1: Build
FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Run the built TanStack Start app through Vite preview.
# The app needs an SSR-aware server; nginx/static hosting alone will not work.
FROM node:22-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/wrangler.jsonc ./wrangler.jsonc
COPY --from=builder /app/vite.config.ts ./vite.config.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json

EXPOSE 80

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "80"]
