import Vue from 'vue'

let app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todoList: []
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
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
    }
  },
  methods: {
    addTodo () {
      this.todoList.push(
        {
          title: this.newTodo,
          createdAt: new Date().Format("yyyy-MM-dd hh:mm:ss"),
          done: false
        }
      )
      this.newTodo = ''
    },
    removeTodo (todo) {
      // todo 就是点击的那一个事项
      let index = this.todoList.indexOf(todo) // 点击的那一个事项在数组中的索引
      this.todoList.splice(index, 1)  // 删除这个被点击的事项
    }
  }
})