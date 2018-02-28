### 项目预览地址

1. `vue-1`预览地址:https://o0chivas0o.github.io/vue/resumeMaker/vue-1/page.html
2. `vue-2`预览地址:https://o0chivas0o.github.io/vue/resumeMaker/vue-2/page.html
3. `vue-3`预览地址:https://o0chivas0o.github.io/vue/resumeMaker/vue-3/page.html
4. `vue-4`预览地址:https://o0chivas0o.github.io/vue/resumeMaker/vue-4/page.html  
  
vue建立编辑器:https://o0chivas0o.github.io/vue/resumeMaker/vue-resumer/dist/  

### 项目详解请点击进各个步骤文件夹,有附上说明  

1-4为一个vue的todoList应用  
    

简历编辑器在提交到github预览页面会出现路径错误问题,需要修改`config`文件夹里`index.js`具体修改内容如下
```
...
build{
  index: path.resolve(__dirname, '../dist/index.html'),
    // Paths
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: 'static',
  assetsPublicPath: './',
...
```

### 使用方法

1. `git clone`clone本仓库对应文件夹
2. `npm i` 下载依赖
3. `http-server -1-c` 开启本地服务器
4. 浏览器输入`localhhost:xxxx` 即可预览项目
