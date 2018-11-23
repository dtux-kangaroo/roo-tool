// Rollup plugins
import path from 'path';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';
import { uglify } from "rollup-plugin-uglify";

export default {
  input: path.join(__dirname,'src/main.js'),
  output: {
    name:'RooTool',  //当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=...
    file: path.join(__dirname,process.env.NODE_ENV === 'production' ? 'lib/roo-tool.min.js':'lib/roo-tool.js'),
    format: 'umd' //  五种输出格式：amd /  es6 / iife / umd / cjs
  },
  plugins: [
    resolve(),
    json(),
    commonjs({
        include: 'node_modules/**',
        extensions: [ '.js', '.coffee' ]
    }),
    babel({
      exclude: 'node_modules/**'  // 排除node_module下的所有文件
    }),
    replace({
        ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }),
    (process.env.NODE_ENV === 'production' && uglify())
  ]
}