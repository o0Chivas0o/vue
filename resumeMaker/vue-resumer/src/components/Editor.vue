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
        <EditorProfile v-bind:profile="profile" />
      </li>
      <li v-bind:class="{active:currentTab === 1}">
        <EditorExperience v-bind:experience="experience"/>
      </li>
      <li v-bind:class="{active:currentTab === 2}">
        <h2>项目经历</h2>
      </li>
      <li v-bind:class="{active:currentTab === 3}">
        <h2>学习经历</h2>
      </li>
      <li v-bind:class="{active:currentTab === 4}">
        <h2>获奖情况</h2>
      </li>
      <li v-bind:class="{active:currentTab === 5}">
        <h2>联系方式</h2>
      </li>
    </ol>
  </div>
</template>

<script>
  import EditorProfile from './EditorProfile'
  import EditorExperience from './EditorExperience'

  export default {
    components:{
      EditorProfile,
      EditorExperience
    },
    data () {
      return {
        currentTab: 0,
        icons: ['shenfen', 'work0', 'heart', 'education', 'iconjiangbei', 'phone'],
        profile: {
          name: '',
          gender: '',
          birth: '',
          city: ''
        },
        experience: [
          {company: '', content: ''}
        ]
      }
    },
    created(){},
    methods: {
    }
  }
</script>

<style type="text/stylus" lang="scss">
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
      .container{
        position: relative;
        .el-icon-remove{
          position: absolute;
          right:0;
          top:0;
        }
        .el-icon-circle-plus{
          position: absolute;
          top: 0;
          right:0;
        }
      }
      > li {
        display: none;
        width: 50%;
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
