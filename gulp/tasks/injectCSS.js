var gulp         = require('gulp');
var config       = require('../config');
var replace = require('gulp-replace');
var fs = require('fs');



gulp.task('injectCSS', function() {
    return gulp
        .src([config.dest.root + '/*.html', '!' + config.dest.root + '/index.html'])
        .pipe(replace(/<link href="css\/([^\.]*).css"[^>]*>/g, function(s,filename) {
            var style = fs.readFileSync(config.dest.css + '/' + filename + '.css', 'utf8');
            return '<style amp-custom>\n' + style + '\n</style>';
        }))
        .pipe(gulp.dest(config.dest.root));
});

gulp.task('injectCSS:watch', function() {
    gulp.watch(config.dest.css + '/*.css', ['injectCSS']);
});
