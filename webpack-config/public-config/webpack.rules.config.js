/**
 * 定义了loader
 */
const autoprefixer = require('autoprefixer');

const rules = {
  rules: [{
    test: require.resolve('jquery'), // 此loader配置项的目标是NPM中的jquery
    loader: 'expose-loader?$!expose-loader?jQuery', // 先把jQuery对象声明成为全局变量`jQuery`，再通过管道进一步又声明成为全局变量`$`
  }, {
    test: /\.html$/,
    loader: 'html-loader?attrs=img:src img:data-src' //html-loader
  }, {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [{
      loader: 'babel-loader',
      options: {
        presets: [
          /* Loose mode and No native modules(Tree Shaking) */
          ['es2015', {
            modules: false,
            loose: false
          }]
        ]
      }
    }]
  }, {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
  }, {
    // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
    test: /\.(mp3|mp4|woff|woff2|svg|eot|ttf)\??.*$/,
    use: [{
      loader: "file-loader",
      options: {
        // 开发环境需要根据当前目录进行查找
        name: "./fonts/[name].[ext]"
      }
    }]
  }, {
    test: /\.(sass|scss)$/,
    use: [
      "style-loader",
      "css-loader",
      "sass-loader",
    ],
  }, {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    use: [{
      loader: 'url-loader',
      options: {
        /* 小於 10kB 的圖片轉成 base64 */
        name: "./imgs/[hash].[ext]"
      }
    }]
  }]
}

module.exports = rules;