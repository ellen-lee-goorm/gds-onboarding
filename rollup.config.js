import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import autoprefixer from 'autoprefixer';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import fs from 'fs';
import { readPackageUpSync } from 'read-package-up';
import path from 'path';

const { packageJson: pkg } = readPackageUpSync({
  cwd: fs.realpathSync(process.cwd()),
});

const pkgDependencies = Object.keys(pkg.dependencies || {});
const pkgPeerDependencies = Object.keys(pkg.peerDependencies || {});
const pkgOptionalDependencies = Object.keys(pkg.optionalDependencies || {});

const input = 'index.ts';

export default [
  buildJS(input, pkg.main, 'cjs'),
  buildJS(input, 'dist/esm', 'es'),
];

function buildJS(input, output, format) {
  const defaultOutputConfig = {
    format,
    sourcemap: true,
  };

  const esOutputConfig = {
    ...defaultOutputConfig,
    preserveModules: true,
    preserveModulesRoot: path.dirname(input),
    exports: 'auto',
    dir: output,
  };

  const cjsOutputConfig = {
    ...defaultOutputConfig,
    preserveModules: false,
    exports: 'named',
    file: output,
  };

  const config = {
    input,
    output: format === 'es' ? esOutputConfig : cjsOutputConfig,
    external: pkgDependencies
      .concat(pkgPeerDependencies)
      .concat(pkgOptionalDependencies),

    plugins: [
      postcss({
        extract: true,
        autoModules: true,
        extension: ['.css', '.scss'],
        use: [['sass']],
        plugins: [autoprefixer()],
        minimize: true,
      }),
      json(),
      nodeResolve({
        extensions: ['.js', '.ts', '.tsx', '.css', '.scss'],
      }),
      commonjs({
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      }),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
      }),
      terser(),
    ],
  };

  return config;
}
