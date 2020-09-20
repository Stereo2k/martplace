let gulp = require('gulp'),
	sass = require('gulp-sass');


gulp.task('scss', function () {
	return gulp.src('app/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
});