const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const path = require("path");

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "npm-package-demo",
      // allows export of *.ed.js and *.umd.js
      fileName: (format) => `${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD
        // for externalized deps
        globals: {
          vue: "Vue",
        }
      }

    }
  },
  plugins: [vue()],
})