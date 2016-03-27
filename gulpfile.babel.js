import gulp from 'gulp'
import browserify from 'browserify'
import babelify from 'babelify'
import watchify from 'watchify'
import sass from 'gulp-sass'
import eslint from 'gulp-eslint'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import gutil from 'gulp-util'
import del from 'del'

const scriptPaths = {
  src: './src/client/index.js',
  dest: './dist/js'
}

const stylePaths = {
  src: './src/client/styles/main.sass',
  dest: './dist/css'
}

const assetPaths = {
  images: './src/client/assets/images/**/*',
  fonts: './src/client/assets/font/**/*',
  jquery: './src/client/assets/vendor/jquery/jquery-1.11.3.js',
  materialize: {
    css: './src/client/assets/vendor/materialize/css/materialize.css',
    js: './src/client/assets/vendor/materialize/js/materialize.js'
  }
}

function printError(err) {
  gutil.log(gutil.colors.red(err.name))
  console.error(err.stack)
  this.emit('end')
}

function createBundler() {
  const bundler = browserify({
    entries: [scriptPaths.src],
    transform: [[babelify, {}]],
    debug: true,
    cache: {},
    packageCache: {}
  })

  return bundler
}

gulp.task('scripts', () => {
  createBundler()
    .bundle()
    .on('error', printError)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(scriptPaths.dest))
})

gulp.task('watch-scripts', () => {
  const watcher = watchify(createBundler())
  rebundle()
  return watcher
    .on('error', printError)
    .on('update', rebundle)

  function rebundle() {
    gutil.log('Update JavaScript bundle')
    watcher
      .bundle()
      .on('error', printError)
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(gulp.dest(scriptPaths.dest))
  }
})

gulp.task('styles', () => {
  gulp
    .src(stylePaths.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(stylePaths.dest))
})

gulp.task('watch-styles', () => {
  gulp.watch('src/client/styles/**/*.sass', ['styles'])
})

gulp.task('lint', () => (
  gulp
    .src(['src/**/*.js', '!node_modules/**', '!**/assets/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
))

gulp.task('watch-lint', () => {
  gulp.watch(['src/**/*.js', '!node_modules/**', '!**/assets/**'], ['lint'])
})

gulp.task('assets', () => {
  gulp
    .src(assetPaths.fonts)
    .pipe(gulp.dest('dist/font'))

  gulp
    .src(assetPaths.images)
    .pipe(gulp.dest('dist/img'))

  gulp
    .src([assetPaths.jquery, assetPaths.materialize.js])
    .pipe(gulp.dest('dist/js'))

  gulp
    .src([assetPaths.materialize.css])
    .pipe(gulp.dest('dist/css'))
})

gulp.task('clean', () => del(['dist']))
gulp.task('build', ['assets', 'lint', 'scripts', 'styles'])
gulp.task('watch', ['watch-scripts', 'watch-styles', 'watch-lint'])
gulp.task('default', ['build'])
