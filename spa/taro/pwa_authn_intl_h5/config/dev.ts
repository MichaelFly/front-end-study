module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    devServer: {
      port: 1024,
      host: 'localhost',
      proxy: {
        '/tws/': {
          target: 'http://127.0.0.1:8083',
        },
      },
    },
  },
};
