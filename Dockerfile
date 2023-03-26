FROM node:18.12.1-slim AS builder
WORKDIR /home


COPY ./ngsw-config.json .
COPY ./package.json .
COPY ./angular.json .
COPY ./karma.conf.js .
COPY ./.browserslistrc .
COPY ./tsconfig.json .
COPY ./tsconfig.app.json .
COPY ./tsconfig.spec.json .
RUN npm i

COPY ./src ./src
RUN npm run build:docker

FROM nginx:1.12-alpine
RUN echo "events {  \
  worker_connections 1024;  \
} \
http {  \
  include mime.types;  \
  sendfile on; \
  server {  \
    listen 8080; \
    resolver 127.0.0.11;  \
    autoindex off;  \
    server_name caua-rinaldi.dev;  \
    absolute_redirect off; \
    root /usr/share/nginx/html;  \
    server_tokens off;  \
    gzip_static on; \
    \
    location / { \
      try_files \$uri \$uri/ =404; \
    } \
  } \
}" > /etc/nginx/nginx.conf
COPY --from=builder /home/dist/graphical-regex-designer /usr/share/nginx/html
EXPOSE 8080
