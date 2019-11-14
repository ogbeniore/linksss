<template>
  <div class="home">
    <h1>{{ name }}</h1>
    <div class="container">
      <CreateLink />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex' 
import CreateLink from '@/components/CreateLink.vue'

export default {
  name: 'home',
  components: {
    CreateLink
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1000px;
  padding: 1rem 2.5rem;
  box-sizing: border-box;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  border-top: 1px dashed palevioletred;
}
</style>