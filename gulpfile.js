const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Complie Sass

gulp.task('sass',function(){
   return gulp.src(['assets/scss/*.scss'])
      .pipe(sass())
      .pipe(gulp.dest('assets/css'));
});

//Watch & Serve

gulp.task('serve',['sass'],function(){
   browserSync.init();
   gulp.watch(['assets/scss/*.scss'],['sass']);
})

//Default
gulp.task('default',['serve']);