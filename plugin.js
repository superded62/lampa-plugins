(function () {
    function startPlugin() {
        // Добавляем пункт в меню
        Lampa.SettingsApi.addParam({
            component: 'more',          // раздел меню "Еще"
            param: {
                name: 'my_section',     // уникальный идентификатор
                type: 'button',
                title: '📺 Мой раздел',
                onClick: function () {
                    // при нажатии показываем уведомление
                    Lampa.Noty.show('Привет из моего плагина! 🎉');

                    // можно вывести список фильмов/сериалов
                    let items = [
                        {
                            title: 'Тестовый фильм',
                            year: 2024,
                            poster: 'https://image.tmdb.org/t/p/w200/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
                            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                        }
                    ];

                    let object = {
                        title: 'Мой раздел',
                        results: items,
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

    // Регистрируем плагин
    Lampa.PluginApi.add({
        id: 'my_section',
        name: 'Мой раздел',
        version: '1.0',
        description: 'Тестовый плагин для Лампы',
        onStart: startPlugin
    });
})();
