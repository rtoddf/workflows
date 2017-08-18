var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat'),
	compass = require('gulp-compass'),
	browserify = require('gulp-browserify');

var coffeeSrcs = ['components/coffee/tagline.coffee'],
	coffeeDest = 'components/scripts',
	jsSrcs = [
		'components/scripts/tagline.js',
		'components/scripts/template.js'
	],
	sassSrcs = ['components/sass/base.scss'],
	sassDest = 'builds/development/css'

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

gulp.task('compass', function(){
	gulp.src(sassSrcs)
		.pipe(compass({
			sass: 'components/sass',
			image: 'builds/development/images',
			style: 'expanded'
		}))
			.on('error', gutil.log)
		.pipe(gulp.dest(sassDest))

})






