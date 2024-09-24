import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/cjs/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/esm/index.js',
      format: 'es',
    },
  ],
  plugins: [
    json(),
    postcss({
      extension: ['.css', '.scss'],
      use: [['sass']],
      plugins: [autoprefixer()],
      minimize: true,
    }),
    typescript(),
    nodeResolve(),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      presets: [['react-app', { flow: false, typescript: true }]],
      // exclude
    }),
    terser(),
    peerDepsExternal(),
  ],
};
