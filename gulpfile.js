var gulp = require('gulp');
var sass = require('gulp-sass');
var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
var archieml = require('archieml');
var parsed = archieml.load('key: value');
var fs = require('fs');


gulp.task('connect', function(){

  app.set('port', (process.env.PORT || 5000));
  app.use(express.static(__dirname + '/public'));

  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');

  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });

  app.get('/', function(request, response) {
    response.render('pages/index', {page: 'index'});
  });

  app.get('/indexespanol', function(request, response) {
    response.render('pages/indexespanol', {page: 'indexespanol'});
  });

  app.get('/about', function(request, response){
    var teamData = JSON.parse(fs.readFileSync('./data/team.json'));
    response.render('pages/about', {team: teamData, page: 'about'});
  });

  app.get('/aboutespanol', function(request, response){
    var teamData = JSON.parse(fs.readFileSync('./data/team.json'));
    response.render('pages/aboutespanol', {team: teamData, page: 'aboutespanol'});
  });

  app.get('/pages/:id', function(req, res){
    var pageName = req.params.id;
    var bodyData = JSON.parse(fs.readFileSync('./data/' + pageName + '.json'));
    res.render('pages/inner', {body: bodyData, page: '/pages/' + pageName});

  });

  app.get('*', function(request, response){
    response.render('pages/404', {page: '404'});
  });

});

gulp.task('sass', function() {
  console.log("compiling sass...");
    return gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/stylesheets/'));

});

gulp.task('watch', function() {
    gulp.watch('./sass/*.scss', ['sass']);

});


gulp.task('default', ['connect', 'sass', 'watch']);
