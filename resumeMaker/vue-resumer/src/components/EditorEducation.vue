<template>
  <div>
    <h2>教育经历</h2>
    <el-form>
      <div class="container"
           v-for="(item,index) in items">
        <el-form-item label="就读院校">
          <el-input v-model="item.school"></el-input>
        </el-form-item>
        <el-form-item label="起止时间">
          <el-input v-model="item.duration"></el-input>
        </el-form-item>
        <el-form-item label="学位信息">
          <el-input v-model="item.degree"></el-input>
        </el-form-item>
        <i class="el-icon-remove"
           @click="removeItem(index)"></i>
        <hr>
      </div>
      <i class="el-icon-circle-plus"
         @click="addItem()"></i>
    </el-form>
  </div>
</template>

<script>
  export default {
    props:
      ['items'],
    methods: {
      addItem () {
        this.items.push({
          school: '',
          duration: '',
          degree: ''
        })
      },
      removeItem (index) {
        this.items.splice(index, 1)
      }
    }
  }
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss">
  .container {
    position: relative;
    .el-icon-remove {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
</style>
