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
      <li v-for="i in [0,1,2,3,4,5]"
          v-bind:class="{active:currentTab === i}">
        tab{{i+1}}
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        currentTab: 0,
        icons:['shenfen','work0','heart','education','iconjiangbei','phone']
      }
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
      > li {
        display: none;
        &.active {
          display: block;
        }
      }
    }
  }
</style>
