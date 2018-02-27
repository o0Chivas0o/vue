import Vue from 'vue'
import AV from 'leancloud-storage'

let APP_ID = 'nwONHFixNzhW7gbICe23THSa-gzGzoHsz'
let APP_KEY = 'zRMfYvL7QJwKf7K9xR84L0u9'
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

let app = new Vue({
  el: '#app',
  data: {
    actionType: 'signUp', // 绑定登录注册的value 根据actionType 切换对应页面 tab组件
    formData: {
      username: '',
      password: ''
    },
    newTodo: '',
    todoList: [],
    currentUser: null,
  },
  created: function () {
    window.onbeforeunload = () => {
      let dataString = JSON.stringify(this.todoList)
      window.localStorage.setItem('myTodos', dataString)
    }
    let oldDataString = window.localStorage.getItem('myTodos')
    let oldData = JSON.parse(oldDataString)
    this.todoList = oldData || []
    Date.prototype.Format = function (fmt) {
      let o = {
        'M+': this.getMonth() + 1, //月份
        'd+': this.getDate(), //日
        'h+': this.getHours(), //小时
        'm+': this.getMinutes(), //分
        's+': this.getSeconds(), //秒
        'q+': Math.floor((this.getMonth() + 3) / 3), //季度
        'S': this.getMilliseconds() //毫秒
      }
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
      for (let k in o)
        if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      return fmt
    }
  },
  methods: {
    addTodo () {
      this.todoList.push(
        {
          title: this.newTodo,
          createdAt: new Date().Format('yyyy-MM-dd hh:mm:ss'),
          done: false
        }
      )
      this.newTodo = ''
    },
    removeTodo (todo) {
      // todo 就是点击的那一个事项
      let index = this.todoList.indexOf(todo) // 点击的那一个事项在数组中的索引
      this.todoList.splice(index, 1)  // 删除这个被点击的事项
    },
    signUp () {
      let user = new AV.User()
      user.setUsername(this.formData.username)
      user.setPassword(this.formData.password)
      user.signUp().then(
        () => {
          this.currentUser = this.getCurrentUser()
          alert('注册成功')
        },
        ()=>{
          alert('注册失败')
        })
    },
    signIn () {
      AV.User.logIn(this.formData.username, this.formData.password).then(
        () => {
          this.currentUser = this.getCurrentUser()
          alert('登录成功')
        },
        ()=>{
          alert('登录失败')
        })
    },
    getCurrentUser() {
      let {id, createdAt, attributes: {username}} = AV.User.current()
      return {id, username, createdAt}
    }
  }
})