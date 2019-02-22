var gulp = require("gulp");
var sass = require("gulp-sass");

//compiles scss into css
gulp.task("sass", function() {
  return gulp
    .src(["src/sass/*.scss"])
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("src/stylesheets"));
});

//watch scss files
gulp.task("watch", function() {
  gulp.watch(
    [
      "src/sass/*.scss",
      "src/sass/modules/*.scss",
      "src/sass/modules/animations/*.scss"
    ],
    gulp.series("sass")
  );
});
