<template>
  <div id="preview">
    <h1>{{resume.profile.name || '个人姓名'}}</h1>
    <p>
      {{resume.profile.gender || '个人性别'}}
      {{resume.profile.birth || '出生年月'}}
      {{resume.profile.city || '所在城市'}}
    </p>
    <hr>
    <section v-if="filter(resume.projects).length > 0">
      <h2>工作经历</h2>
      <ul>
        <li v-for="project in filter(resume.projects)">
          {{project.name}}
          {{project.content}}
          {{project.duty}}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['resume'],
    methods: {
      filter (array) {
        return array.filter(item => !this.isEmpty(item))
      },
      isEmpty (object) {
        let empty = true
        for (let key in object) {
          if (object[key]) {
            empty = false
            break
          }
        }
        return empty
      }
    }
  }
</script>

<style type="text/stylus" rel="stylusheet/stylus" lang="scss">
  #preview {
  }
</style>
