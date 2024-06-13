const path = require("path")
const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        public: path.resolve(__dirname, "public")
      }
    },
    module: {
      rules: [
        {
          test: /\.(ico)(\?.*)?$/,
          loader: "url-loader",
          options: {
            limit: 204800,
            name: "img/[name].[hash:7].[ext]"
          }
        }
      ]
    }
  }
})

// module.exports = {
//   transpileDependencies: true,
//   configureWebpack: {
//     resolve: {
//       alias: {
//         components: "@/components"
//       }
//     }
//   }
// }
