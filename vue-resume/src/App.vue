<template>
  <div id="app">
    <Logo class="topBar"/>
    <main>
      <Editor class="editor"/>
      <Preview class="preview"/>
    </main>
  </div>
</template>

<script>
import Logo from './components/Logo'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
  name: 'app',
  components: {
    Logo,Editor,Preview
  }
}
</script>

<style>
#app{
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #DDDDDD;
}
main{
  display: flex;
  flex:1;
}
  main >.editor{
    width: 40em;
  }
  main >.preview{
    flex:1;
  }
</style>
