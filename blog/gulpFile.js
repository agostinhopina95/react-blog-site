var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCSS = require("gulp-clean-css");
const { dest } = require("gulp");

var paths = {
  styles: {
    src: "node_modules/bootstrap/dist/css/*.css",
    dest: "public",
  },
  script: {
    src: [
      "node_modules/bootstrap/dist/js/bootstrap.js",
      "node_modules/jquery/dist/jquery.js",
    ],
    dest: "public",
  },
  scss: {
    src: [
      "node_modules/bootstrap/scss/bootstrap.scss",
      "node_modules/font-awesome/scss/font-awesome.scss",
    ],
    dest: "public",
  },
  folder: {
    font_awesome: {
      src: "node_modules/font-awesome/fonts/*",
      dest: "public",
    },
  },
  image: [],
};

gulp.task("buildCSS", function () {
  return gulp
    .src(paths.scss.src)
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(cleanCSS()) // Minify CSS files..
    .pipe(gulp.dest(paths.scss.dest));
});

gulp.task("buildJS", function () {
  return gulp.src(paths.script.src).pipe(gulp.dest(paths.script.dest));
});

gulp.task("copyFolder", function () {
  return gulp
    .src(paths.folder.font_awesome.src)
    .pipe(gulp.dest(paths.folder.font_awesome.dest));
});

gulp.task("main", gulp.series("buildCSS", "buildJS", "copyFolder"));
