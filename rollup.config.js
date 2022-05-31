const typescript = require('rollup-plugin-typescript');
const copy = require('rollup-plugin-copy');

module.exports = {
    input: 'src/index.ts',
    output: {
      file: 'docs/js/bundle.js',
      format: 'umd',
      name: 'projectbundle',
      sourcemap: true
    },
    plugins: [
        typescript() ,
    ]
};
