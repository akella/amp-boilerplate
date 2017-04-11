var gulp        = require('gulp');
var config      = require('../config');
var gitStaged   = require("gulp-git-staged");
var git         = require('gulp-git');
var gulpAmpValidator = require('gulp-amphtml-validator');





gulp.task('amphtml', function() {
  return gulp.src([config.dest.html + "/*.html",'!'+config.dest.html + "/index.html"])
      .pipe(gulpAmpValidator.validate())
      // Print the validation results to the console. 
      .pipe(gulpAmpValidator.format())
      // Exit the process with error code (1) if an AMP validation error 
      // occurred. 
      .pipe(gulpAmpValidator.failAfterError());
});



gulp.task('lint', [
    'amphtml'
]);