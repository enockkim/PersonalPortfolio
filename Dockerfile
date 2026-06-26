FROM node:20-alpine AS build
WORKDIR /app
COPY ./package*.json ./
RUN npm install --force
COPY ./ ./
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
