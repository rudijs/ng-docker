# a minimal Nginx container
FROM gliderlabs/alpine:3.3

# install nginx
RUN apk update && apk add \
    nginx \
    && rm -rf /var/cache/apk/*

COPY nginx.conf /etc/nginx/nginx.conf

COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443
