FROM node:18-alpine3.17 as build

WORKDIR /app
COPY . /app

RUN npm install
RUN npm install --save-dev cross-env
# RUN npm run build

EXPOSE 5173
CMD ["npm","run","vite"]
