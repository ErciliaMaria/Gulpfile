const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function compilaSass() {
    return gulp.src('./source/images/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/images'));
}
function comprimeImagen() {
    return gulp.src('./source/images/*', {encoding:false})
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}
exports.sass = compilaSass
exports.imagens = comprimeImagen
exports.default = function() {
    gulp.watch('./source/styles/*.scss', gulp.series(compilaSass))
}