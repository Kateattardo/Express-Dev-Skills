const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const skillsRouter = require('./routes/skills');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(function(req, res, next) {
  res.locals.time = new Date().toLocaleTimeString();
  next();
});

//Mount middelwear into middelwear request pipeline
//app.use take a middlewear fn
//[middelwear]

//log in terminal the request info
app.use(logger('dev'));
//process data sent int he body of the request if it's json data
app.use(express.json());
//process data sent in the "form" body of the reqest
//creat a propert on req. body for each input 
app.use(express.urlencoded({ extended: false }));
//add a coockies prop for each cookie
//for each cookie sent in the request
app.use(cookieParser());
//if the req is for a static assest, retun the file 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/skills', skillsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
