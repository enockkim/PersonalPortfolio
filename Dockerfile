# --- Stage 1: Build Vite app ---
    FROM node:18-alpine AS builder

    WORKDIR /app
    COPY . .
    RUN npm install
    RUN npm run build
    
    # --- Stage 2: Serve with NGINX ---
    FROM nginx:stable-alpine AS production
    
    # Copy Vite build output (dist/) to NGINX web root
    COPY --from=builder /app/dist/public /usr/share/nginx/html
    
    # Remove default NGINX config
    RUN rm /etc/nginx/conf.d/default.conf
    
    # Add custom config
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]
    