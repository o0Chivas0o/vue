<template>
  <div id="app">
    <Topbar class="topbar"/>
    <main>
      <Editor class="editor"/>
      <Preview class="preview"/>
    </main>
  </div>
</template>

<script>
  import Topbar from './components/Topbar'
  import Editor from './components/Editor'
  import Preview from './components/Preview'

  export default {
    components: {
      Topbar, Editor, Preview
    }
  }
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss">
  #app{
    display: flex;
    flex-direction: column;
    height: 100vh;
    .topbar{
      z-index: 1;
      box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
    }
    main{
      display: flex;
      flex:1;
      .editor{
        width: 40em;
        margin: 16px 8px 16px 16px;
        background: white;
        box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
        border-radius: 4px;
        overflow: hidden;
      }
      .preview{
        flex: 1;
        margin: 16px 16px 16px 8px;
        background: white;
        box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
        border-radius: 4px;
        overflow: hidden;
      }
    }
  }
</style>
