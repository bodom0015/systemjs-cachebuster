var gulp = require("gulp");
var SystemJSCacheBuster = require("systemjs-cachebuster");
var watch = require("gulp-watch");

var files = "src/**/*.js";
var cacheBuster = new SystemJSCacheBuster();

gulp.task('watch', function () {
    return gulp
        .src(files)
        .pipe(cacheBuster.full())
        .pipe(watch(files))
        .pipe(cacheBuster.incremental());
});

gulp.task('prep', function () {
    return gulp
        .src([
            "node_modules/systemjs/dist/system.src.js", 
            "node_modules/systemjs-cachebuster/src/system.cachebuster.js"])
        .pipe(gulp.dest("./lib"));
});
