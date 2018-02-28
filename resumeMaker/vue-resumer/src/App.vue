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

<style lang="scss">
  #app {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    display: flex;
    flex: 1;

  .editor {
    width: 40em;
  }

  .preview {
    flex: 1;
  }

  }
</style>
