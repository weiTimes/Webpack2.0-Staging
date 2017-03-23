/**
 * 定义了loader
 */
const autoprefixer = require('autoprefixer');

const rules = {
  rules: [{
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
    test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
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
        limit: 10000,
        /* 小於 10kB 的圖片轉成 base64 */
        name: "./imgs/[name].[ext]"
      }
    }]
  }]
}

module.exports = rules;