const path = require("path")
const { defineConfig } = require("@vue/cli-service")

// ElementPlus按需引入相关配置
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")

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
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
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
