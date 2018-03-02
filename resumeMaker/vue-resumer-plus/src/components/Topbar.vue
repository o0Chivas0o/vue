<template>
  <div class="topbar">
    <div id="topbar">
      <div class="logo">
        VueRusumer
      </div>
      <div class="actions">
        <el-button type="primary" round>注册</el-button>
        <el-button round>登录</el-button>
        <el-button v-on:click="preview" type="primary">预览</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: ''
  }
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss">
  #topbar {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    font-size: 20px;
    align-items: center;
  }
</style>
