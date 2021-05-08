module.exports = {
  babelrc: false,
  ignore: ['./node_modules'],
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current', "esmodules": true
      }
    }],
    '@babel/preset-typescript',
  ]
};