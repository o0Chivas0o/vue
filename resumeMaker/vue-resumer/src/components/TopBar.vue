<template>
  <div id="topBar">
    <div class="logo">
      VueRusumer
    </div>
    <div class="actions">
      <el-button type="primary" round>注册</el-button>
      <el-button round>登录</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: ''
  }
</script>

<style type="text/scss" rel="stylusheet/scss" lang="scss">
  #topBar {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    font-size: 20px;
    align-items: center;
  }
</style>
