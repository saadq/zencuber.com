import gulp from 'gulp'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import rename from 'gulp-rename'
import browserify from 'browserify'
import babelify from 'babelify'
import uglify from 'gulp-uglify'
import watchify from 'watchify'
import sass from 'gulp-sass'
import minifyCSS from 'gulp-minify-css'

const jsDirs = {
  src: './src/client/index.js',
  dest: './dist/js'
}

const sassDirs = {
  src: './src/client/styles/**/*.sass',
  dest: './dist/css'
}

function buildBundle(b) {
  let start = Date.now()
  b.bundle()
  .on('error', (err) => {
    console.error(err.stack)
  })
  .pipe(source('bundle.min.js'))
  .pipe(buffer())
  // .pipe(uglify())
  .pipe(gulp.dest(jsDirs.dest))
  .on('end', () => {
    let end = Date.now()
    let totalTime = end - start
    console.log(`finished scripts in ${totalTime} ms`)
  })
}

gulp.task('scripts', () => {
  let b = browserify({
    cache: {},
    packageCache: {},
    fullPaths: true,
    debug: true
  })
  b = watchify(b.transform(babelify))
  b.on('update', () => { buildBundle(b) })
  b.add(jsDirs.src)
  buildBundle(b)
})

gulp.task('styles', () => {
  gulp.src(sassDirs.src)
  .pipe(sass().on('error', sass.logError))
  // .pipe(minifyCSS())
  .pipe(rename('style.css'))
  .pipe(gulp.dest(sassDirs.dest))
})

gulp.task('watch-styles', () => {
  gulp.watch(sassDirs.src, ['styles'])
})

gulp.task('default', ['watch-styles', 'scripts'])
