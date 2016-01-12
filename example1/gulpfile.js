var gulp = require('gulp');
var browserify = require('gulp-browserify');
 
// Basic usage 
gulp.task('default', function() {
	// Single entry point to browserify 
	gulp.src('.example1/src/app.js')
		.pipe(browserify({
		  insertGlobals : true
		}))
		.pipe(gulp.dest('./example1/build'))

}


);