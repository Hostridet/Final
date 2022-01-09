const {src, dest, series, watch, parallel} = require("gulp");
const htmlOptimizer = require("gulp-minify-html");
const browsersync = require("browser-sync").create();
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const newer = require('gulp-newer');
const del = require("del");

//Обработка html
const html = () => {
    return src("./src/**/*.html")
        .pipe(htmlOptimizer())
        .pipe(dest("./dist"));
}
//Обработка css
const css = () => {
    return src("./src/**/*.css", "./node_modules/bootstrap/dist/css/bootstrap.min.css")
        .pipe(concat('index.min.css'))
        .pipe(cleanCSS( { level: { 1: { specialComments: 0 } }} ))
        .pipe(dest("./dist"));
}
//Обработка js
const js = () => {
    return src("./src/**/*.js")
        .pipe(dest("./dist"))
}
//Обработка img
const image = () => {
    return src("./img-src/*.*")
        .pipe(newer('img'))
        .pipe(dest("img"));
}
//Очистка папки build
const clear = () => {
    return del("dist/", {force: true})
}
//Сервер
const server = () => {
    browsersync.init({
        server: {
            baseDir: "./dist"
        }
    })
}
//Отслеживание изменений в html
const watcher = () => {
    watch("./src/**/*.html", html);
}

// Задачи
exports.css = css;
exports.image = image;
exports.watch = watcher;
exports.def = series(html, parallel(watcher, server));
exports.build = series(clear,image, html, css, js);