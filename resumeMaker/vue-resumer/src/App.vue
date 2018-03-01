<template>
  <div id="app" v-bind:class="{previewMode: previewMode}">
    <TopBar class="topBar"
            v-on:preview="preview" />
    <main>
      <Editor class="editor"
               v-bind:resume="resume" />
      <Preview class="preview"
               v-bind:resume="resume" />
    </main>
    <el-button id="exitPreview" v-on:click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
  import TopBar from './components/TopBar'
  import Editor from './components/Editor'
  import Preview from './components/Preview'

  export default {
    components: {
      TopBar,
      Editor,
      Preview
    },
    methods:{
      exitPreview(){
        this.previewMode = false
      },
      preview(){
        this.previewMode = true
      }
    },
    data () {
      return {
        previewMode: false,
        resume: {
          profile: {name: '', gender: '', birth: '', city: ''},
          experience: [{company: '', content: ''}],
          education: [{school: '', duration: '', degree: ''}],
          projects: [{name: '', content: '', duty: ''}],
          trophy: [{name: '', content: '', time: ''}],
          contact: {phoneNumber: '', email: '', qq: ''}
        }
      }
    }
  }
</script>

<style type="text/scss" rel="stylusheet/scss" lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .topBar {
    z-index: 1;
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
  }

  main {
    display: flex;
    flex: 1;
    background: #DDDDDD;
    .editor {
      width: 40em;
      margin: 16px 8px 16px 16px;
      background: white;
      box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
      border-radius: 4px;
      overflow: hidden;
    }
    .preview {
      flex: 1;
      margin: 16px 16px 16px 8px;
      background: white;
      box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
      border-radius: 4px;
      overflow: hidden;
    }
  }
  .previewMode > #topBar{
    display: none;
  }
  .previewMode #editor{
    display: none;
  }
  .previewMode #preview{
    max-width: 800px;
    margin: 32px auto;
  }
  #exitPreview{
    display: none;
  }
  .previewMode #exitPreview{
    display: inline-block;
    position: fixed;
    right: 16px;
    bottom: 16px;
  }

</style>
