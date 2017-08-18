var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat'),
	browserify = require('gulp-browserify');

var coffeeSrcs = ['components/coffee/tagline.coffee'],
	coffeeDest = 'components/scripts',
	jsSrcs = [
		'components/scripts/tagline.js',
		'components/scripts/template.js'
	]

// gulp.task('log', function(){
// 	gutil.log('workflows are awesome');
// });

gulp.task('coffee', function(){
	gulp.src(coffeeSrcs)
		.pipe(coffee({ bare: true })
			.on('error', gutil.log)
		)
		.pipe(gulp.dest(coffeeDest))
})

gulp.task('js', function(){
	gulp.src(jsSrcs)
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/scripts'))
});