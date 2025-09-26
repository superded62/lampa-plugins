(function () {
    function startPlugin() {
        // Добавляем компонент в настройки, если нужно (для нового раздела)
        Lampa.SettingsApi.addComponent({
            component: 'more',  // или свой, если хочешь отдельный раздел
            name: 'Мой раздел'
        });

        // Добавляем кнопку в меню "Ещё"
        Lampa.SettingsApi.addParam({
            component: 'more',          // раздел меню "Ещё"
            param: {
                name: 'my_section',     // уникальный идентификатор
                type: 'button',
                title: '📺 Мой раздел',
                onClick: function () {
                    // При нажатии показываем уведомление
                    Lampa.Noty.show('Привет из моего плагина! 🎉');

                    // Список фильмов/сериалов
                    let items = [
                        {
                            title: 'Тестовый фильм',
                            year: 2024,
                            poster: 'https://image.tmdb.org/t/p/w200/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
                            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                        }
                        // Можно добавить больше items
                    ];

                    let object = {
                        url: '',  // Пустой URL для кастомного списка
                        title: 'Мой раздел',
                        component: 'category_full',  // Стандартный компонент для списков фильмов
                        movies: items,  // Массив карточек (Lampa ожидает 'movies' для category_full)
                        page: 1,  // Начальная страница
                        onBack: function () {
                            Lampa.Controller.toggle('content');
                        }
                    };

                    Lampa.Activity.push(object);
                }
            },
            field: {
                name: 'Мой раздел'
            }
        });
    }

    // Регистрируем плагин (опционально, если не работает — попробуй удалить)
    Lampa.PluginApi.add({
        id: 'my_section',
        name: 'Мой раздел',
        version: '1.0',
        description: 'Тестовый плагин для Лампы',
        onStart: startPlugin
    });

    // Вызываем startPlugin сразу, если app ready (как в примерах)
    if (window.appready) startPlugin();
    else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type === 'ready') startPlugin();
        });
    }
})();
