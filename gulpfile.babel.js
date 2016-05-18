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
import standard from 'standard'
import del from 'del'

const jsPaths = {
  src: './src/client/index.js',
  dest: './dist/js'
}

const sassPaths = {
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

const isProd = process.env.NODE_ENV === 'production'

function createBundler () {
  const bundler = browserify({
    entries: [jsPaths.src],
    transform: [ [babelify, {}], [envify, {}] ],
    debug: !isProd,
    cache: {},
    packageCache: {},
    fullPaths: !isProd
  })
  return bundler
}

function printError (err) {
  gutil.log(gutil.colors.red(err.name))
  console.error(err.message)
  console.error(err.codeFrame)
  this.emit('end')
}

gulp.task('scripts', () => {
  createBundler()
    .bundle()
    .on('error', printError)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(jsPaths.dest))
})

gulp.task('watch-scripts', () => {
  const watcher = watchify(createBundler())
  rebundle()
  return watcher
    .on('error', printError)
    .on('update', rebundle)

  function rebundle () {
    gutil.log('Update JavaScript bundle')
    watcher
      .bundle()
      .on('error', printError)
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(gulp.dest(jsPaths.dest))
  }
})

gulp.task('watch-server', () => {
  nodemon({
    script: './src/server/index.js',
    exec: './node_modules/.bin/babel-node',
    ext: 'js',
    ignore: ['gulpfile.js', 'bundle.js', 'node_modules/*']
  })
    .on('change', [])
    .on('restart', () => {
      console.log('Server restarted')
    })
})

function printLintResults (err, data) {
  if (err) {
    printError(err)
    return
  }

  if (data.errorCount === 0) {
    const message = gutil.colors.green('All files linted successfully without errors!')
    gutil.log(message)
    return
  }

  data.results.forEach(result => {
    const { filePath, messages } = result
    const path = gutil.colors.green(filePath)

    if (messages.length === 0) {
      return
    }

    gutil.log()
    gutil.log(path)

    result.messages.forEach(messageObj => {
      const { message, line, column } = messageObj
      const location = gutil.colors.red(`${line}:${column}`)
      const arrow = gutil.colors.yellow('=>')
      const error = gutil.colors.cyan(`${message}`)

      gutil.log(`${location} ${arrow} ${error}`)
    })
  })
}

gulp.task('lint', () => {
  return standard.lintFiles(['./gulpfile.babel.js', `${__dirname}/src/**/*.js`], {
    parser: 'babel-eslint',
    ignore: [jsPaths.dest, './src/client/assets', './src/client/styles']
  }, printLintResults)
})

gulp.task('watch-lint', () => {
  gulp.watch('./src/**/*.js', ['lint'])
})

gulp.task('styles', () => {
  gulp
    .src(sassPaths.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(sassPaths.dest))
})

gulp.task('watch-styles', () => {
  gulp.watch('src/client/styles/**/*.sass', ['styles'])
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
gulp.task('build', ['assets', 'styles', 'lint', 'scripts'])
gulp.task('watch', ['watch-lint', 'watch-scripts', 'watch-styles'])

gulp.task('default', ['build'])
