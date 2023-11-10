FROM node:lts-alpine3.17 as builder

# Copy files as a non-root user. The `node` user is built in the Node image.
WORKDIR /app
RUN chown node:node ./
USER node

# Install dependencies first, as they change less often than code.
COPY package.json package-lock.json* astro.config.mjs ./
RUN npm ci && npm cache clean --force
COPY ./src ./src
RUN npm run build

FROM nginx:1.25.3-alpine as serve
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80