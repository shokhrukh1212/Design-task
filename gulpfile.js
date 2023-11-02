const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglifyCss = require("gulp-uglifycss");
const imagemin = require("gulp-imagemin");

function compileSass() {
  return gulp
    .src("./sass/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
}

function minifyCss() {
  return gulp
    .src("./css/*.css")
    .pipe(uglifyCss({ uglyComments: true }))
    .pipe(gulp.dest("./dist/styles/"));
}

function imageMin() {
  return gulp
    .src("./assets/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"));
}

function watch() {
  gulp.watch("./sass/*.scss", compileSass);
  gulp.watch("./css/*.css", minifyCss);
  gulp.watch("./assets/images/*", imageMin);
}

const run = gulp.parallel(compileSass, minifyCss, imageMin);

gulp.task("sass", compileSass);
gulp.task("css", minifyCss);
gulp.task("imageMin", imageMin);
gulp.task("run", run);
gulp.task("watch", watch);

gulp.task("default", gulp.series(run, watch));
