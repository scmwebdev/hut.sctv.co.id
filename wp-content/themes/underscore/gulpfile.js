var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var merge = require('merge-stream');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

/* ========================================================
 * Paths Variable
 * ======================================================== */

var basePaths = {
    root: '../',
    theme: './',
    style: './sass/',
    bower: './bower_components/',
    npm: './node_modules/'
}

var style = {
    main: basePaths.style + 'style.scss',
    vendor: basePaths.style + 'vendor/'
}

var module = {
    slick: basePaths.npm + 'slick-carousel/slick/',
    fontawesome: basePaths.npm + 'slick-carousel/font-awesome/',
    bootstrap: basePaths.npm + 'bootstrap-plugins.sass/assets/'
}


/* ========================================================
 * Tasks with Browser Sync
 * ======================================================== */
gulp.task('browserSync', function() {

    var files = [
        '**/**/*.css',
        '**/**/*.scss',
        '**/**/*.php',
    ];

    browserSync.init(files, {
        proxy: "http://localhost:8888/hut.sctv.co.id/",
        notify: 'false'
    });
});

gulp.task('style', function() {
    return gulp.src(style.main)
        .pipe(plugins.plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass())
        // .pipe(plugins.sass({ outputStyle: 'compressed' }))
        .pipe(plugins.autoprefixer())
        .pipe(plugins.sourcemaps.write())
        .pipe(plugins.rename('style.css'))
        .pipe(gulp.dest(basePaths.theme)) 
        .pipe(reload({ stream: true }));
});

gulp.task('js', function() {
    return gulp.src([
            './node_modules/jquery/dist/jquery.js',
            './node_modules/fastclick/lib/*.js',
            './node_modules/slick-carousel/slick/slick.js',
            path + '/js/news-sctv.js',
        ])
        .pipe(plugins.concat('news-sctv.js'))
        .pipe(gulp.dest(path))
        .pipe(plugins.uglify())
        .pipe(plugins.concat('news-sctv.min.js'))
        .pipe(gulp.dest(basePaths))
        .pipe(reload({ stream: true }));
});


/* ========================================================
 * Utility Tasks
 * ======================================================== */

gulp.task('bootstrap', function(){

    var bootstrapStyle = gulp.src(module.bootstrap + 'stylesheets/**/**/*')
        .pipe(gulp.dest(style.vendor + 'bootstrap-plugins.sass'));
    
    return merge(bootstrapStyle);
});

gulp.task('font-awesome', function(){

    //move font awesome scss to our main plugins.sass folder
    var faStyle = gulp.src(module.fontawesome + 'scss/*')
        .pipe(gulp.dest(style.vendor + 'font-awesome'));

    //move font_awesome fonts to themes root folder
    var faFont = gulp.src(module.fontawesome + 'fonts/**/*')
        .pipe(gulp.dest(basePaths.root + 'fonts'));
 
    //merge tasks
    return merge(faStyle, faFont);

});

gulp.task('slicky', function(){

    // move slick fonts to the fonts under our themes folder
    var slickFont = gulp.src(module.slick + 'fonts/*')
        .pipe(gulp.dest( './fonts'));

    var slickStyle = gulp.src([
        module.slick  + 'slick.scss',
        module.slick  + 'slick-theme.scss'
        ])
    .pipe(gulp.dest(style.vendor + 'slick'));

    // move ajax loader to custom themes folder
    var slickAjaxLoader = gulp.src(module.slick + 'ajax-loader.gif')
        .pipe(gulp.dest(basePaths.root));

    //merge tasks
    return merge(slickFont, slickStyle, slickAjaxLoader);

});

gulp.task('utility', ['bootstrap', 'slicky', 'font-awesome']);

/* ========================================================
 * Default Tasks
 * ======================================================== */

gulp.task('default', ['style', 'js', 'browserSync'], function() {
    gulp.watch('*.scss', {cwd: path + '/sass'}, ['style']);
    gulp.watch('**/*.scss', {cwd: path + '/sass'}, ['style']);
    gulp.watch('*.js', {cwd: path + '/js'}, ['js']);
});