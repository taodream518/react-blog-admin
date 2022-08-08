/*
 * @Descripttion:
 * @Author: Coder-Tao
 * @Date: 2022-07-27 14:32:18
 * @LastEditTime: 2022-07-27 14:34:08
 */
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3000', // 后台服务地址以及端口号
      changeOrigin: true, // 是否开启代理
      pathRewrite: {
        '/api': '', // 代理名称
      },
    })
  );
};
