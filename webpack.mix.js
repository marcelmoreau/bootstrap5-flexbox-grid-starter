const mix = require('laravel-mix')

mix.setResourceRoot(process.env.RESOURCE_ROOT || '/')
mix.setPublicPath('docs')

// Mix Options

mix.options({
    clearConsole: Mix.isWatching()
})

// Asset Config

mix.sass('resources/scss/main.scss', 'css', {
    sassOptions: {
        includePaths: [
            'resources/scss',
        ],
    },
})

// mix.extract()

mix.sourceMaps()
mix.version()
