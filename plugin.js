(function () {
    var plugin = {};

    plugin.id = 'my_plugin';
    plugin.version = '1.0.0';
    plugin.name = 'Мой плагин';
    plugin.description = 'Пример простого плагина для Lampa';

    plugin.run = function () {
        console.log('Мой плагин запущен');

        // Добавляем пункт в главное меню
        Lampa.Listener.send('menu_main', {
            type: 'add',
            title: 'Мой раздел',
            url: 'plugin://my_plugin'
        });

        // Реакция на открытие меню
        Lampa.Listener.follow('app', function (e) {
            if (e.type === 'open' && e.url === 'plugin://my_plugin') {
                Lampa.Activity.push({
                    url: 'plugin://my_plugin/page',
                    component: 'full',
                    type: 'card',
                    title: 'Привет из моего плагина',
                    data: {
                        results: [
                            {
                                title: 'Тестовый фильм',
                                release_year: 2024,
                                poster: 'https://upload.wikimedia.org/wikipedia/ru/c/c1/The_Matrix_Poster.jpg'
                            }
                        ]
                    }
                });
            }
        });
    };

    Lampa.Plugins.add(plugin);
})();


