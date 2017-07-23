var gulp = require('gulp'),
	watch = require('gulp-watch'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	simple_vars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import');

gulp.task('default', function () {
	console.log('hi,  this is a gulp task!! ');
})

gulp.task('html', function() {
	console.log('html task triggered here.');
})

gulp.task('css', function() {
	return gulp.src('./app/assets/styles/main.css')
		.pipe(postcss([cssImport, simple_vars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles/'));
})

gulp.task('watch', function() {
	watch('./app/index.html', function() {
		gulp.start('html');
	});
	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('css');
	});
})

