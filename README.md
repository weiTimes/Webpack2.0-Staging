# ZNC - 基于Webpack2.0的多页应用架构

## How to use?

````
# Clone this repo 
  https://github.com/weiTimes/Webpack2.0-Staging.git

# Install dependencies
  npm install || yarn(If you have installed)

# Run for development
  npm run start

# Run for production
  npm run build
````

## Catogory Structrue
````
# app 开发目录
# app/lib 公共库
# app/MachineStudy 指南车机器人学院模块(可在此基础上持续集成)
# app/index.html && index.js && index.scss 指南车实用平台入口
# build 发布目录
# node_modules node包模块
# webpack-config webpack的子配置项
# webpack-config/public-config webpack开发环境配置与发布环境配置的公共配置
# .gitignore 用于代码提交到github时选择忽略的部分
# README.md 项目内容介绍
# webpack.config.js webpack开发环境配置
# webpack.config.product.js webpack发布环境配置
# yarn.lock yarn installed的相关文件
````

## What you need care?

* **/htmls 放的是所有出首页外的子页, **/js 放的是所有子页的入口，他们除后缀名之后字符串外字符串必须相等，否则无法打包到一起

## Contact

Feel free to contact me:

* Email: 1156385527@qq.com