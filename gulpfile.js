const gulp = require("gulp");
const watch = require("gulp-watch");
const babel = require("gulp-babel");
const eslint = require("gulp-eslint");
const del = require("del");
const babelConfig = {
  presets: ["@babel/preset-typescript"],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
    "@babel/plugin-transform-modules-commonjs",
  ],
};
const entry = [
  "src/server/**/*",
  "!src/server/tsconfig.json",
  "!src/server/typings/**",
];
const cleanEntry = [
  "node_modules",
  "src/server/pm2.json",
  "src/server/tsconfig.json",
  "src/server/typings",
  "src/server/views",
  "src/server/libs",
];

async function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return await del(["dist/**/*.*", "!dist/assets/**/*.*", "!dist/views/*.*"]);
}

//上线环境
function buildProd() {
  return gulp
    .src(entry)
    .pipe(
      babel({
        babelrc: false,
        ignore: cleanEntry,
        ...babelConfig,
      })
    )
    .pipe(gulp.dest("dist"));
}
function buildLint() {
  return gulp
    .src("src/server")
    .pipe(
      eslint({
        rules: {
          camelcase: 1,
          "comma-dangle": 2,
          quotes: 0,
        },
      })
    )
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}
function buildDev() {
  //开发环境整体拷贝
  return watch(
    [...entry, "src/server/logs"],
    {
      ignoreInitial: false,
    },
    function () {
      gulp.src(entry).pipe(gulp.dest("dist"));
    }
  );
}
let dev = gulp.series(buildDev);
let prod = gulp.series(clean, buildLint, buildProd);
let lint = gulp.series(buildLint);

gulp.task("default", lint);
gulp.task("lint", lint);
gulp.task("dev", dev);
gulp.task("prod", prod);
