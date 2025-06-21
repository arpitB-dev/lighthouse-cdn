import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import json from "@rollup/plugin-json";
import polyfills from "rollup-plugin-node-polyfills";

export default {
  input: "index.js",
  output: {
    file: "dist/lighthouse.umd.js",
    format: "umd",
    name: "lighthouse",
  },
  plugins: [
    polyfills({
      crypto: true,
      stream: true,
      buffer: true,
      util: true,
    }),
    resolve({
      preferBuiltins: false,
      browser: true,
    }),
    commonjs(),
    json(),
  ],
  onwarn: (warning, warn) => {
    if (warning.code === "CIRCULAR_DEPENDENCY") return;
    warn(warning);
  },
};
