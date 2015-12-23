import gulp from 'gulp'
import gulpif from 'gulp-if'
import source from 'vinyl-source-stream'
import sass from 'gulp-sass'
import browserify from 'browserify'
import babelify from 'babelify'
import watchify from 'watchify'
import livereload from 'gulp-livereload'
import eslint from 'gulp-eslint'
import del from 'del'

const jsPaths = {
  'src': 'src/client/index.js',
  'dest': 'dist/js'
}

const sassDirs = {
  src: 'src/client/styles/**/*.sass',
  dest: 'dist/css'
}

const assetPaths = {
  images: 'src/client/assets/images/**/*',
  fonts: 'src/client/assets/font/**/*',
  jquery: 'src/client/assets/vendor/jquery/jquery-1.11.3.js',
  materialize: {
    css: 'src/client/assets/vendor/materialize/css/materialize.css',
    js:  'src/client/assets/vendor/materialize/js/materialize.js'
  }
}

let watch

function browserifyScript() {
  let b = browserify({
    cache: {},
    packageCache: {},
    fullPaths: true,
    debug: true
  })

  b = b.transform('babelify', { presets: ['es2015', 'react'] })

  if (watch) {
    b = watchify(b)
    b.on('update', () => { bundle(b) })
  }

  b.add(jsPaths.src)
  bundle(b)
}

function bundle(b) {
  b.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(jsPaths.dest))
    .pipe(gulpif(watch, livereload()))
}

gulp.task('lint', function () {
  return gulp.src(['src/**/*.js', '!node_modules/**', '!**/assets/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('scripts', () => {
  watch = false
  browserifyScript()
})

gulp.task('watch-scripts', () => {
  watch = true
  browserifyScript()
})

gulp.task('styles', () => {
  gulp.src(sassDirs.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(sassDirs.dest))
})

gulp.task('watch-styles', () => {
  gulp.watch('src/client/styles/**/*.sass', ['styles'])
})

gulp.task('copy', () => {
  gulp.src(assetPaths.fonts)
    .pipe(gulp.dest('dist/font'))

  gulp.src(assetPaths.images)
    .pipe(gulp.dest('dist/img'))

  gulp.src([assetPaths.jquery, assetPaths.materialize.js])
    .pipe(gulp.dest('dist/js'))

  gulp.src([assetPaths.materialize.css])
    .pipe(gulp.dest('dist/css'))
})

gulp.task('clean', () => { del(['dist']) })
gulp.task('build', ['lint', 'scripts', 'styles', 'copy'])
gulp.task('watch', ['watch-scripts', 'watch-styles'])

gulp.task('default', ['build'])
