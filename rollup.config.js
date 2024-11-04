import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

import { readPackageUpSync } from 'read-package-up';
import autoprefixer from 'autoprefixer';
import json from '@rollup/plugin-json';
import fs from 'fs';
import path from 'path';

const input = 'index.ts';

const { packageJson: pkg } = readPackageUpSync({
  cwd: fs.realpathSync(process.cwd()),
});

const defaultExternal = [/@babel\/runtime/];
const pkgDependencies = Object.keys(pkg.dependencies || {});
const pkgPeerDependencies = Object.keys(pkg.peerDependencies || {});
const pkgOptionalDependencies = Object.keys(pkg.optionalDependencies || {});
const external = defaultExternal
  .concat(pkgDependencies)
  .concat(pkgPeerDependencies)
  .concat(pkgOptionalDependencies);

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
    exports: 'auto',
    preserveModules: true,
    preserveModulesRoot: path.dirname(input),
    dir: output,
  };
  const cjsOutputConfig = {
    ...defaultOutputConfig,
    exports: 'named',
    preserveModules: false,
    file: output,
  };

  const config = {
    input,
    output: [format === 'es' ? esOutputConfig : cjsOutputConfig],
    external: external,
    plugins: [
      json(),
      nodeResolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
      commonjs({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
      babel({
        babelHelpers: 'runtime',
        babelrc: false,
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
        plugins: ['@babel/plugin-transform-runtime'],
        exclude: 'node_modules/**',
      }),
      postcss({
        extensions: ['.scss', '.css'],
        plugins: [autoprefixer()],
        extract: false,
        modules: true,
        minimize: true,
      }),
      typescript({ useTsconfigDeclarationDir: true }),
      terser(),
    ],
  };

  return config;
}
