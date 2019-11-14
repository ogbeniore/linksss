<template>
  <div class="home">
    <h1>{{ name }}</h1>
    <div class="container">
      <CreateLink />
      <Listlinks />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex' 
import CreateLink from '@/components/CreateLink.vue'
import Listlinks from '@/components/ListLinks.vue'

export default {
  name: 'home',
  components: {
    CreateLink,
    Listlinks
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
  max-width: 1200px;
  padding: 1rem;
  box-sizing: border-box;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 40% 60%;
  border-top: 1px dashed green;
}
</style>