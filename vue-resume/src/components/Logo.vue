<template>
<div id="topBar">
<div class="logo">
  Vue Resumer
</div>
  <div class="actions">
      <el-button type="primary" round>注册</el-button>
      <el-button round>登录</el-button>
      <el-button type="primary" round>预览</el-button>
      <el-button round>保存</el-button>
  </div>
</div>
</template>

<script>
  export default {
    name: 'Logo',
  }
</script>

<style lang="scss">
  #topBar{
    display: flex;
    justify-content: space-between;
    padding: 16px;
    font-size:30px;
    align-items: center;
  }
</style>
