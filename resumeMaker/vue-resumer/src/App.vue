<template>
  <div id="app">
    <TopBar class="topBar"/>
    <main>
      <Editor class="editor"/>
      <Preview class="preview"/>
    </main>
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
    }
  }
</script>

<style type="text/stylus" rel="stylusheet/stylus" lang="scss">
  #app {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .icon {
    width: 1em; height: 1em;
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

</style>
