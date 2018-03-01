<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="i in [0,1,2,3,4,5]"
            v-bind:class="{active:currentTab === i}"
            v-on:click="currentTab = i">
          <svg class="icon" aria-hidden="true">
            <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panes">
      <li v-bind:class="{active:currentTab === 0}">
        <h2>个人档案</h2>
        <EditorProfile v-bind:profile="resume.profile" />
      </li>
      <li v-bind:class="{active:currentTab === 1}">
        <h2>工作经历</h2>
        <EditorItems
          v-bind:items="resume.experience"
          v-bind:a="{company:'',content:''}"
          v-bind:labels="{company:'就职公司',content:'工作内容'}"
        />
      </li>
      <li v-bind:class="{active:currentTab === 2}">
        <h2>项目经历</h2>
        <EditorItems
          v-bind:items="resume.projects"
          v-bind:labels="{name:'项目名称',content:'项目描述',duty:'个人职责'}"
        />
      </li>
      <li v-bind:class="{active:currentTab === 3}">
        <h2>教育经历</h2>
        <EditorItems
          v-bind:items="resume.education"
          v-bind:labels="{school:'就读院校',duration:'就读时间',degree:'学位信息'}"
        />
      </li>
      <li v-bind:class="{active:currentTab === 4}">
        <h2>获奖情况</h2>
        <EditorItems
          v-bind:items="resume.trophy"
          v-bind:labels="{name:'获奖名称',content:'获奖信息',time:'获奖时间'}"
        />
      </li>
      <li v-bind:class="{active:currentTab === 5}">
        <h2>联系方式</h2>
        <el-form>
          <el-form-item label="手机号码">
            <el-input v-model="resume.contact.phoneNumber"></el-input>
          </el-form-item>
          <el-form-item label="个人邮箱">
            <el-input v-model="resume.contact.email"></el-input>
          </el-form-item>
          <el-form-item label="联系人QQ">
            <el-input v-model="resume.contact.qq"></el-input>
          </el-form-item>
        </el-form>
      </li>
    </ol>
  </div>
</template>

<script>
  import EditorProfile from './EditorProfile'
  import EditorItems from './EditorItems'

  export default {
    components: {
      EditorProfile,
      EditorItems,
    },
    props:['resume'],
    data () {
      return {
        currentTab: 0,
        icons: ['shenfen', 'work0', 'heart', 'education', 'iconjiangbei', 'phone'],
      }
    },
    created () {},
    methods: {}
  }
</script>

<style type="text/scss" rel="stylusheet/scss" lang="scss">
  #editor {
    display: flex;
    > nav {
      background: #000;
      width: 80px;
      > ol {
        > li {
          padding: 16px 0;
          text-align: center;
          border-radius: 4px 0 0 4px;
          .icon {
            width: 24px;
            height: 24px;
            fill: white;
          }
          &.active {
            background: white;
            > .icon {
              fill: black;
            }
          }
        }
      }
    }
    .panes {
      width: 100%;
      overflow: auto;
      > li {
        display: none;
        margin: 0 auto;
        padding: 32px;
        > h2 {
          text-align: center;
        }
        &.active {
          display: block;
        }
      }
    }
  }
</style>
