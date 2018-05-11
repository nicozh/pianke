<template>
  <main>
      <focus></focus>
      <titl>
        <span>阅读&nbsp;|&nbsp;Read</span>
      </titl>
      <titl>
        <span>TING</span>
      </titl>
      <titl>
        <span>人气片客&nbsp;|&nbsp;Hot Pianker</span>
      </titl>
    </main>
</template>

<script>
import focus from './focus'
import titl from './title'
export default {
  name: 'home',
  data(){
    return {}
  },
  components: { focus, titl }
}
</script>

<style scoped>

</style>
