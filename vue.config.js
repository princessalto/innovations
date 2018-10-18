module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      // proxy all requests starting with /api to
      '/api/v1': {
        target: 'http://localhost:8000/api/v1',
        changeOrigin: false,
      },
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Authorization, X-Requested-With, Origin, X-Auth-Token, X-CSRF-Token, Content-type'
    },
  },
}
