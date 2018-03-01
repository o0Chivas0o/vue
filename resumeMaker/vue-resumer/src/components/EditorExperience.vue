<template>
  <div>
    <h2>工作经历</h2>
    <el-form>
      <div class="container"
           v-for="(work,index) in experience">
        <el-form-item label="任职公司">
          <el-input v-model="work.company"></el-input>
        </el-form-item>
        <el-form-item label="工作内容">
          <el-input v-model="work.content"></el-input>
        </el-form-item>
        <i class="el-icon-remove"
           @click="removeExperience(index)"></i>
        <hr>
      </div>
      <i class="el-icon-circle-plus"
         @click="addExperience()"></i>
    </el-form>
  </div>
</template>

<script>
  export default {
    props:
      ['experience'],
    methods: {
      addExperience () {
        this.experience.push({
          company: '',
          content: ''
        })
      },
      removeExperience (index) {
        this.experience.splice(index, 1)
      }
    }
  }
</script>

