var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task

gulp.task('sass', function() {
  gulp.src('./styles/**/*.scss')
  	.pipe(sass().on('error', sass.logError))
  	.pipe(gulp.dest('./build/css'));
});

gulp.task('watch', function(){
	return gulp.src('./styles/**/*.scss')
		.pipe(watch('./styles/**/*.scss'))
		.pipe(sass())
		.pipe(gulp.dest('./build/css'))
})

//gulp.task('default', ['sass', 'watch']);