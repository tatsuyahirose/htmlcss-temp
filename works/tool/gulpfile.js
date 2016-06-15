
var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var frontnote = require("gulp-frontnote");
var uglify = require("gulp-uglify");
var plumber = require("gulp-plumber");
var browser = require("browser-sync");
var reload = require("browser-sync").reload;
 
gulp.task("sass", function() {
    gulp.src("../html/nenga/2016/common/scss/**/*.scss")
        .pipe(plumber())
        // .pipe(frontnote({
        //     css: '../html/css/frontnote.css'
        // }))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("../html/nenga/2016/common/css"))
        .pipe(browser.reload({stream:true}))
});

gulp.task("js", function() {
    gulp.src(["../html/nenga/2016/common/js/origin/**/*.js"])
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest("../html/nenga/2016/common/js/minify/"))
        .pipe(browser.reload({stream:true}))
});

gulp.task("server", function() {
    browser({
        server: {
            baseDir: "../html/"
        }
    });
});

gulp.task("default", ['server'], function() {
    gulp.watch("../html/nenga/2016/common/scss/**/*.scss",["sass"]);
    gulp.watch("../html/nenga/2016/common/js/origin/**/*.js", ["js"]);
    gulp.watch("../html/**/*", reload);
});