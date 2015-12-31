import gulp from 'gulp'
import gutil from 'gulp-util'
import sass from 'gulp-sass'
import nodemon from 'gulp-nodemon'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import browserify from 'browserify'
import watchify from 'watchify'
import babelify from 'babelify'
import envify from 'envify'
import livereactload from 'livereactload'
import eslint from 'gulp-eslint'
import del from 'del'

const jsPaths = {
  src: './src/client/index.js',
  dest: './dist/js'
}

const sassDirs = {
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

let isProd = process.env.NODE_ENV === 'production'
  , watch = false

function createBundler() {
  let bundler = browserify({
    entries: [jsPaths.src],
    transform: [ [babelify, {}], [envify, {}] ],
    plugin: (isProd || !watch) ? [] : [ livereactload ],
    debug: !isProd,
    cache: {},
    packageCache: {},
    fullPaths: !isProd
  })
  return bundler
}

gulp.task('scripts', () =>  {
  watch = false
  createBundler()
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(jsPaths.dest))
})

gulp.task('watch-scripts', () =>  {
  watch = true
  let watcher = watchify(createBundler())
  rebundle()
  return watcher
    .on('error', gutil.log)
    .on('update', rebundle)

  function rebundle() {
    gutil.log('Update JavaScript bundle')
    watcher
    .bundle()
    .on('error', gutil.log)
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest(jsPaths.dest))
  }
})

gulp.task('watch-server', () =>  {
  nodemon({
    script: './src/server/index.js',
    exec: './node_modules/.bin/babel-node',
    ext: 'js',
    ignore: ['gulpfile.js', 'bundle.js', 'node_modules/*']
  })
  .on('change', [])
  .on('restart',  () =>  {
    console.log('Server restarted')
  })
})

gulp.task('styles', () => {
  gulp
    .src(sassDirs.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(sassDirs.dest))
})

gulp.task('watch-styles', () => {
  gulp.watch('src/client/styles/**/*.sass', ['styles'])
})

gulp.task('lint', () => {
  return gulp
    .src(['src/**/*.js', '!node_modules/**', '!**/assets/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

gulp.task('copy', () => {
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

gulp.task('clean', () => { del(['dist']) })
gulp.task('build', ['lint', 'scripts', 'styles', 'copy'])
gulp.task('watch', ['watch-server', 'watch-scripts', 'watch-styles'])

gulp.task('default', ['build'])
