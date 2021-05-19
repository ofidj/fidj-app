const express = require('express');
const gulp = require('gulp');
const replace = require('gulp-replace');

const app = express();
const port = Number(process.env.PORT || 8080);
const appId = process.env.FIDJ_APP_ID || 'demo';
const fidjProd = process.env.FIDJ_APP_PROD || 'true';

gulp
    .src(['www/build/main.js'])
    .pipe(replace(/fidjService.init.*/g, "fidjService.init('" + appId + "', { prod: " + fidjProd + " })"))
    .pipe(gulp.dest('www/build/'))
    .on('end', function () {

        app.use(express.static(__dirname + '/www'));
        const server = app.listen(port, function () {
            console.log('Listening on port %d', server.address().port);
        });

    });
