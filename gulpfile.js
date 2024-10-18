/* eslint-disable no-undef */
'use strict'

const gulp = require('gulp');
const rename = require('gulp-rename');
// const sass = require('gulp-sass')(require('node-sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');

// Función para compilar el CSS
const main_css = () =>
	gulp
	.src(['./src/scss/**/*.scss']) // Si quieres monitorear más archivos SCSS
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(rename('main.css'))
	.pipe(cleanCSS())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./css/'));

// Función para observar cambios
const watch = () => {
	gulp.watch('./src/scss/**/*.scss', main_css); // Aquí cambia 'gulp.series' por la referencia directa a 'main_css'
};

// Exportar tareas
exports.main_css = main_css;
exports.watch = watch;

const dev = gulp.series(main_css, watch);

exports.dev = dev;
exports.default = dev;
