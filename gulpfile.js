var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat'),
	compass = require('gulp-compass'),
	connect = require('gulp-connect'),
	browserify = require('gulp-browserify');

var coffeeSrcs = ['components/coffee/tagline.coffee'],
	coffeeDest = 'components/scripts',
	babel = require('gulp-babel'),
	jsSrcs = [
		'components/scripts/es6.js',
		'components/scripts/tagline.js',
		'components/scripts/template.js'
	],
	sassSrcs = ['components/sass/style.scss'],
	sassDest = 'builds/development/css',
	htmlSrcs = ['builds/development/*.html'],
	jsonSrcs = ['builds/development/scripts/*.json']

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
		.pipe(babel({
            presets: ['env']
        }))
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/scripts'))
		.pipe(connect.reload())
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
		.pipe(connect.reload())
})

gulp.task('default', ['html', 'json', 'coffee', 'js', 'compass', 'connect', 'watch'])


gulp.task('watch', function(){
	gulp.watch(coffeeSrcs, ['coffee'])
	gulp.watch(jsSrcs, ['js'])
	gulp.watch('components/sass/*.scss', ['compass'])
	gulp.watch(htmlSrcs, ['html'])
	gulp.watch(jsonSrcs, ['json'])
})

gulp.task('connect', function(){
	connect.server({
		root: 'builds/development/',
		livereload: true
	})
})

gulp.task('html', function(){
	gulp.src(htmlSrcs)
		.pipe(connect.reload())
})

gulp.task('json', function(){
	gulp.src(jsonSrcs)
		.pipe(connect.reload())
})








