/**
 * Created by nikiforov-as on 09.09.2016.
 */
/* File: gulpfile.js */

// собираем все наши плагины
var gulp  = require('gulp'),
    gutil = require('gulp-util');

// создаем задачку, которая будет выполняться по умолчанию
gulp.task('default', function() {
    return gutil.log('Gulp is running!')
});

gulp.task('copyHtml', function () {
    gulp.src('./*.html').pipe(gulp.dest('public'));
});
