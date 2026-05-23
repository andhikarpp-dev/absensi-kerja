# ================================================================
# Stage 1: Build Frontend (Angular 21)
# ================================================================
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies (cache layer)
COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps

# Copy source & build production
COPY . .
RUN npm run build:prod

# ================================================================
# Stage 2: Serve dengan Nginx
# ================================================================
FROM nginx:1.27-alpine

# Konfigurasi nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy hasil build Angular
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html/ak

EXPOSE 4300

CMD ["nginx", "-g", "daemon off;"]
