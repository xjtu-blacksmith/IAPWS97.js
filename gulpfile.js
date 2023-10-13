var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	jshint = require('gulp-jshint'),
	KarmaServer = require('karma').Server;

async function test () {
    await new KarmaServer({
		configFile: __dirname + '/tests/karma.conf.js'
	}).start();
}

function lint () {
  return gulp.src('./src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
}

function all () {
  return gulp.src([
       './src/neutriumjs.thermo.iapws97.js',
	   './src/neutriumjs.thermo.iapws97.pT.js',
	   './src/neutriumJS.thermo.IAPWS97.PS.js',
	   './src/neutriumJS.thermo.IAPWS97.PH.js',
	   './src/neutriumJS.thermo.IAPWS97.HS.js'
    ])
  	.pipe(concat('neutriumJS.thermo.IAPWS97.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
}

function pt () {
  return gulp.src([
       './src/neutriumJS.thermo.IAPWS97.js',
	   './src/neutriumJS.thermo.IAPWS97.PT.js',
    ])
  	.pipe(concat('neutriumJS.thermo.IAPWS97.pt.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
}

function ps () {
  return gulp.src([
       './src/neutriumJS.thermo.IAPWS97.js',
	   './src/neutriumJS.thermo.IAPWS97.PT.js',
	   './src/neutriumJS.thermo.IAPWS97.PS.js'
    ])
  	.pipe(concat('neutriumJS.thermo.IAPWS97.pt-ps.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
}

function ph () {
  return gulp.src([
       './src/neutriumJS.thermo.IAPWS97.js',
	   './src/neutriumJS.thermo.IAPWS97.PH.js',
    ])
  	.pipe(concat('neutriumJS.thermo.IAPWS97.pt-ph.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
}

function hs () {
  return gulp.src([
       './src/neutriumJS.thermo.IAPWS97.js',
	   './src/neutriumJS.thermo.IAPWS97.PT.js',
	   './src/neutriumJS.thermo.IAPWS97.PH.js',
	   './src/neutriumJS.thermo.IAPWS97.HS.js',
    ])
  	.pipe(concat('neutriumJS.thermo.IAPWS97.pt-ph-hs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
}

exports.default = gulp.series(lint, all, pt, ps, ph, hs, test);