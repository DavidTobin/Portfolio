'use strict';

var connect       = require('connect'),
    http          = require('http'),
    compression   = require('compression'),
    cookieParser	= require('cookie-parser'),
    responseTime  = require('response-time'),
    serveStatic   = require('serve-static'),
    app           = connect();

// Load middleware
app.use(compression());
app.use(responseTime());
app.use(cookieParser());

app.use(serveStatic('dist/'));

http.createServer(app).listen(80);
