const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {


    const countriesProxy = createProxyMiddleware({
        target: "https://restcountries.eu/rest/v2/name",
        changeOrigin: true,
        logLevel: 'debug',
        autoRewrite: true,
        pathRewrite: {
            '/countries' : ''
        }
    });

    const currenciesProxy = createProxyMiddleware({
        target: "http://data.fixer.io",
        changeOrigin: true,
        logLevel: "debug",
        autoRewrite: true,
        pathRewrite: {
            '/currencies': ''
        }
    })

    app.use('/countries', countriesProxy);
    app.use('/currencies', currenciesProxy);
};
