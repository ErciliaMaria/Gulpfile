const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compilaSass() {
    return gulp.src('./source/images/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/images'));
}
function comprimeImagen() {
    return gulp.src('./source/images/*', { encoding: false })
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}
function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}
exports.sass = compilaSass
exports.imagens = comprimeImagen
exports.javascript = comprimeJavaScript
exports.default = function () {
    gulp.watch('./source/images/main.scss', { ignoreInitial: false }, gulp.series(compilaSass))

    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeImagen))

    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript))
}