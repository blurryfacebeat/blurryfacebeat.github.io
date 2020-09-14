let path = require('path');

module.exports = {
    // Режим работы, есть так же 'production' и none, если ну нужна оптимизация кода
    mode: 'development',
    // Путь к главному файлу
    entry: './js/script.js',
    // Конечный файл и путь его сохранения, __dirname - корневая папка
    output: {
        filename: 'bundle.js',
        path: __dirname + '/js'
    },
    // Если watch - true, то webpack запомнит файлы, которые были собраны и будет пересобирать их при каждом их сохранении
    watch: true,
    // Хранит информацию об исходном коде до минификации и т.д.
    devtool: "source-map",
    // Подключаемые дополнительные модули и их настройки
    module: {
        rules: [
            // Подключаем Babel
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bowe_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', {
                            targets: {
                                "edge": "17",
                                "firefox": "60",
                                "chrome": "67",
                                "safari": "11.1"
                            },
                            debug: true,
                            corejs: 3,
                            useBuiltIns: "usage"
                        }]]
                    }
                }
            }
        ]
    }
    // Есть свойство plugins для подключения различных плагинов
};
