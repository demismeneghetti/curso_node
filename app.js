var express = require('express');
var msg = require('./mod_teste');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("home/index");
});

app.get('/tecnologia', function(req, res){
    res.render("<html><bofy>Portal de Tecnologia</body></html>");
});

app.get('/noticias', function(req, res){
    res.render("noticias/noticias");
});

app.get('/admin', function(req, res){
    res.render("admin/form_add_noticia");
});

app.listen(3000, function(){
    console.log(msg);
});