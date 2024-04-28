FROM node:20 as setup
USER node
WORKDIR /app
COPY build/ ./build/
COPY package*.json ./
# RUN ls -la ./build/client

FROM setup AS build
WORKDIR /app
RUN npm ci
ENV APP_PORT 80
ENV APP_HOSTNAME '0.0.0.0'
EXPOSE 80
CMD ["node", "./build/express.server.js"]