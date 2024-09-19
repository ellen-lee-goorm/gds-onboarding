import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts', // 입력 파일
  output: {
    file: 'dist/bundle.js', // 출력 파일
    format: 'umd', // 모듈 형식
    name: 'MyLibrary', // 라이브러리 이름
  },
  plugins: [
    resolve(), // Node 모듈 해결
    commonjs(), // CommonJS 모듈 변환
    terser(), // 코드 압축
  ],
};
