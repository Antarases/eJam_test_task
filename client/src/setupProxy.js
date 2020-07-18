const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use("/deployments", createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));
    app.use("/deployment", createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));
    app.use("/deploymentTemplates", createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));
};
