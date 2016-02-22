# FROM alpine:3.3
FROM mhart/alpine-node:5.6.0

RUN \
  # apk add nodejs logrotate --update && \
  apk add logrotate --update && \
  rm -rf /var/cache/apk/*

# NPM package cache
COPY npm-shrinkwrap.json /tmp/npm-shrinkwrap.json
RUN \
    cd /tmp && \
    npm install --production --progress=false && \
    npm install -g pm2@latest -g && \
    npm cache clean

ENV APP_DIR /srv/app
ENV APP_USER www-data

RUN \
  mkdir -p ${APP_DIR} && \
  mkdir ${APP_DIR}/log && \
  cp -a /tmp/node_modules/ ${APP_DIR}

COPY dist ${APP_DIR}/dist
COPY httpd ${APP_DIR}/httpd
COPY package.json ${APP_DIR}/package.json
COPY npm-shrinkwrap.json ${APP_DIR}/npm-shrinkwrap.json
COPY server.js ${APP_DIR}/server.js
COPY docker-start.sh ${APP_DIR}/docker-start.sh
RUN chmod +x ${APP_DIR}/docker-start.sh

RUN \
  addgroup -g 2000 $APP_USER && adduser -h $APP_DIR -G $APP_USER -u 2000 -D $APP_USER && \
  chown $APP_USER ${APP_DIR}/log

COPY logrotate.conf /etc/logrotate.d/app
RUN chmod 644 /etc/logrotate.d/app

USER $APP_USER

# Export the APP_DIR as a data volume under the app USER account.
# Other containers use this volume's data (eg. logstash, nginx).
VOLUME ${APP_DIR}

# Application Start
WORKDIR ${APP_DIR}

CMD ["./docker-start.sh"]
