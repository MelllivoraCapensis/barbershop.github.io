    var gulp= require('gulp');// Подключаем Gulp
    var browserSync = require('browser-sync'); // Подключаем Browser Sync
    gulp.task('browser-sync', function() { // Создаем таск browser-sync
        browserSync({ // Выполняем browserSync
            server: { // Определяем параметры сервера
                baseDir: './' // Директория для сервера - app
            },
            notify: false // Отключаем уведомления
        });
    });
    gulp.task('watch', ['browser-sync'], function() {
        gulp.watch('css/*.css', browserSync.reload);
        gulp.watch('*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
        gulp.watch('js/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
    });

