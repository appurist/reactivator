import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/reactivator.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/reactivator.esm.js',
      format: 'es',
    },
    {
      file: 'dist/reactivator.umd.js',
      format: 'umd',
      name: 'Reactivator',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    terser(),
  ],
};
