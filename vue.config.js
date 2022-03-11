module.exports = {
    publicPath: './',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        // 配置反向代理
        proxy: {
            '/api': {  // 以/api开头的请求
                target: 'http://111.229.37.167/',  // 以/api开头的请求，全部代理到http://111.229.37.167/上
                // ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    }
}