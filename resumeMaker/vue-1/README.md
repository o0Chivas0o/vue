#### vue mission-1

1. `git clone`仓库
2. `npm i`下载依赖
3. 可自行修改`app.js`和`page.html`文件,熟悉vue的双向绑定,事件,以及各种api.
4. 基本的api有`v-on`,`v-for`,`v-bind`,`v-model`等等
5. app.js格式
```
import Vue from 'vue'

new Vue({
  el:'#app', //MVC中view层模板
  data:{
    message:'Hellow Vue!' // 对应page.html文件中的占位符
  },
  methods:{  // 注意是methods 不是method
    changeMessage(){} 
  }
})
```
