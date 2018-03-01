<template>
    <el-form>
      <div class="container"
           v-for="(item,index) in items"
           v-bind:key="index">
        <el-form-item v-for="key in keys"
                      v-bind:label="labels[key] || key"
                      v-bind:key="key">
          <el-input v-model="item[key]"></el-input>
        </el-form-item>
        <i class="el-icon-remove"
           @click="removeItem(index)"></i>
        <hr>
      </div>
      <i class="el-icon-circle-plus"
         @click="addItem()"></i>
    </el-form>
</template>

<script>
  export default {
    props:
      ['items','labels'],
    computed: {
      keys () {
        return Object.keys(this.items[0])
      }
    },
    methods: {
      addItem () {
        const empty = {}
        this.keys.map((key) => {
          empty[key] = ''
        })
        this.items.push(empty)
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
