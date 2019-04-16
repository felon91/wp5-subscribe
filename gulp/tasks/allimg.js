module.exports = function () {
  $.gulp.task('allimg', function () {
    return $.gulp.src('images/freewp5/**/*.{png,jpg,svg}')
        .pipe($.gulp.dest('build/images/freewp5'));
  });
};