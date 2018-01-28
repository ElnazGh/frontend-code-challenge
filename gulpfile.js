var gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
	runSequence = require('run-sequence'),
	merge = require('gulp-merge'),
	concat = require('gulp-concat');

gulp.task('default', function() {

});

// -------- run -------- //

gulp.task('run', function () {

	runSequence(
		'build'
	);

	return watch([
		'assets/sass/*.scss',
		'assets/sass/*/*.scss',
		'src/app/*/*.js'], function () {

			runSequence(
				'appJS',
				'appCSS'
			);
		});
});

// -------- build -------- //

gulp.task('build', function () {

	runSequence(
		'vendorJS',
		'fonts',
		'appJS',
		'appCSS'
	);

});

// -------- vendorJS -------- //

gulp.task('vendorJS', function () {

	return merge(
		gulp.src([
			'node_modules/angular/*.min.js',
			'node_modules/angular-ui-router/release/angular-ui-router.min.js'
		])
	)
	.pipe(concat('vendor.js'))
	.pipe(gulp.dest(''));

});

// -------- fonts -------- //

gulp.task('fonts', function () {

	return gulp.src([
		'node_modules/font-awsome/fonts/*',
		'node_modules/font-awsome/css/*.min.css'
	])
	.pipe(gulp.dest('assets/fonts'))

});

// -------- appJS -------- //

gulp.task('appJS', function () {

	return merge(
		gulp.src([
			'src/app.js',
			'src/app/*/*.js'
		])
	)
	.pipe(concat('index.js'))
	.pipe(gulp.dest(''));

});


// -------- appCSS -------- //

gulp.task('appCSS', function () {

	return gulp.src(['assets/sass/*.scss'])
	.pipe(sass()
		//.on('error', sass.lonError))
		.on('error', function (err) {
	      	console.log('error');
	    })
	)
	.pipe(concat('app.css'))
	.pipe(gulp.dest(''));

});

// gulp.task('sass', function() {
//   gulp.src([srcDir + 'sass/*.scss'])
//     .pipe(sass())
//     .on('error', function (err) {
//       console.log(err.message + ' on line ' + err.lineNumber + ' in file : ' + err.fileName);
//     })
// });  