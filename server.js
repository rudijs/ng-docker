'use strict';

var app = require('koa')();
var router = require('koa-router')();
var koaJsonLogger = require('koa-json-logger');
var render = require('koa-ejs');
var helmet = require('koa-helmet');
var compress = require('koa-compress');
var staticCache = require('koa-static-cache');
var path = require('path');

app.use(helmet());

app.use(koaJsonLogger({ name: 'app' }));

app.use(compress());

app.use(staticCache(path.join(__dirname, 'dist'), {
  maxAge: 365 * 24 * 60 * 60
}));

// EJS templates
render(app, {
  root: 'httpd',
  layout: false,
  cache: false,
  debug: true
});

// TODO: build out status/ response
router.get('/status', function *status(next) {
  this.body = 'A-OK!';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.use(function *index(){
  yield this.render('index');
});

app.listen(3000);
