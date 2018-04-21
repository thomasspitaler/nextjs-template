const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')
const exportPaths = require('./export-paths.json')

module.exports = withTypescript(withCSS({
    exportPathMap: () => exportPaths,
    webpack: (config) => {
        config.plugins.push(
            new webpack.EnvironmentPlugin(localEnv)
        )

        config.node = {
            fs: 'empty'
        }

        return config
    }
}))
