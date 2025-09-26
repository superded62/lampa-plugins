(function(){
    var plugin = {};
    
    plugin.id = 'my_plugin';
    plugin.version = '1.0.0';
    plugin.name = 'Мой плагин';
    plugin.description = 'Пример простого плагина для Lampa';

    // Инициализация
    plugin.init = function(){
        console.log('Мой плагин запущен');
        
        // пример: добавляем пункт в меню
        Lampa.Listener.send('menu_main', {
            type: 'add',
            title: 'Мой раздел',
            url: 'plugin://my_plugin'
        });
    };

    // Регистрируем плагин
    Lampa.Plugins.add(plugin);
})();
