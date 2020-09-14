const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');

gulp.task('sass', async function() {
    gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest('css'));
});

gulp.task('js', async function() {
    gulp.src('app.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('develop', gulp.parallel('sass', 'js'));