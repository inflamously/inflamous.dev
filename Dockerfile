FROM node:20 as setup
USER node
WORKDIR /app
COPY build/ ./build/
COPY server.js ./
COPY package*.json ./
# RUN ls -la ./build/client

FROM setup AS build
RUN npm ci
ENV PORT 3000
EXPOSE 3000
CMD ["node", "server.js"]