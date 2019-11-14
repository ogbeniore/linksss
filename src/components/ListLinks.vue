<template>
  <div class="table_wrapper">
    <table>
      <thead>
        <tr>
          <th>S/N</th>
          <th>Link Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody v-if="all.length">
        <tr v-for="( link, index) in all" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
            <a :href="link.url" target="_blank" rel="noopener">
              {{ link.title }}
            </a>
          </td>
          <td>
            <button>delete</button>
          </td>
        </tr>
      </tbody>
      <tbody v-else class="text-center">
        No links have been created
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ListLinks',
  computed: {
    ...mapGetters([
      'all'
    ])
  }
}
</script>

<style scoped>
.table_wrapper {
  border-left: 2px solid green;
  padding: 2rem 3rem;
}
table {
  width: 100%;
  padding: 0 0rem 2rem 0rem;
}
thead {
  background: green;
  padding: 1rem;
  color: #ffffff;
}
tr,
td,
th {
  padding: 1rem;
  border: 1px solid green;
  border-top: none;
}
th:first-of-type,
td:first-of-type {
  max-width: 10px;
  padding: 0.2rem 1rem;
}
.text-center {
  padding: 1rem;
  text-align: center;
  color: green;
}
</style>