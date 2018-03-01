<template>
  <div>
    <h2>个人信息</h2>
    <el-form>
      <el-form-item label="个人姓名">
        <el-input v-model="profile.name"></el-input>
      </el-form-item>
      <el-form-item label="个人性别">
        <el-input v-model="profile.gender"></el-input>
      </el-form-item>
      <el-form-item label="出生年月">
        <el-input v-model="profile.birth"></el-input>
      </el-form-item>
      <el-form-item label="所在城市">
        <el-input v-model="profile.city"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    props:['profile']
  }
</script>

<style scoped>

</style>
