#!/bin/sh

echo "`date` Container init crond"
/usr/sbin/crond

echo "`date` Container init app"
pm2 start /srv/app/server.js --no-daemon
