var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync');

gulp.task('sass', function(){
	return gulp.src('app/clean_html_original/css/sass/**/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('app/clean_html_original/css/'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app/clean_html_original'	
		},
		notify: true
	});
});

gulp.task('watch', ['browser-sync','sass'], function(){
	gulp.watch('app/clean_html_original/css/sass/**/*.sass', ['sass']);
	gulp.watch('app/clean_html_original/*.html', browserSync.reload);
	gulp.watch('app/clean_html_original/js/*.js', browserSync.reload);
});