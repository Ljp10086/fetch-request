import * as path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
// rollup.config.js
export default {
	input: path.resolve(__dirname, 'src/index.ts'),
  output: {
    file: './lib/bundle.js',
    format: 'esm'
  },
	plugins: [
    resolve(),
		typescript(),
	]
}