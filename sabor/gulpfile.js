const gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () =>
  gulp.src('./assets/sass/*.scss ')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      versions: ['last 2 browsers']
    }))
    .pipe(gulp.dest('./assets/css'))
);

gulp.task('default', () => {
  gulp.watch('./assets/sass/*.scss', gulp.series('sass'))
});
