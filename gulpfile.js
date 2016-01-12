var gulp = require('gulp');
var browserify = require('gulp-browserify');
 
// Basic usage 
gulp.task('default', function() {
	// Single entry point to browserify 
	    gulp.src('./example1/src/app.js')
		.pipe(browserify({
		  insertGlobals : true
		}))
		.pipe(gulp.dest('./example1/build'));

		gulp.src('./example2/src/app.js')
		.pipe(browserify({
		  insertGlobals : true
		}))
		.pipe(gulp.dest('./example2/build'));

		gulp.src('./example3/src/app.js')
		.pipe(browserify({
		  insertGlobals : true
		}))
		.pipe(gulp.dest('./example3/build'))

}


);