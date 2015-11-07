/**
 * Created by randy on 11/7/15.
 */

var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect();

app.use(serveStatic("../Work/UnravelNg"));
app.listen(5000);





//var connect = require('connect');
//var serveStatic = require('serve-static');
//var app = connect();
//
//var http = require('http');
//
//app.use(serveStatic("/Work/UnravelNg"));
//app.listen(5100);
