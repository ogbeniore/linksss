<template>
  <div class="form">
    <form @submit.prevent="submitForm">
      <div class="form_item">
        <label for="title">Link Name</label>
        <input type="text" name="title" placeholder="My Link" v-model="link.title">
      </div>
      <div class="form_item">
        <label for="url">Link Url</label>
        <input type="url" name="url" placeholder="http://example.com" v-model="link.url">
      </div>
      <div class="form_item">
        <label for="description">Link Description</label>
        <textarea name="description" rows="5" placeholder="Link to my wonderful Portfolio" v-model="link.description"></textarea>
      </div>
      <button class="form_button" type="submit">
        <span v-if="!loading">Save Link</span>
        <span v-else>Loading...</span>
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'CreateLink',
  data() {
    return {
      link: {
        title: '',
        url: '',
        description: ''
      },
      loading: false,
      links: []
    }
  },
  methods: {
    ...mapActions([
      'postLink'
    ]),
    ...mapMutations([
      'statusPending',
      'statusFailure'
    ]),
    submitForm() {
      this.statusPending()
      if(this.link.name == '' || this.link.url == '') {
        this.statusFailure()
      } else {
        this.postLink(this.link)
      }
    }
  },
  computed: {
    ...mapGetters([
      'status'
    ])
  },
  watch: {
    status(value) {
      if(value != null) {
        if(value == 'success') {
          this.link = {
            title: '',
            url: '',
            description: ''
          }
        }
        if(value == 'pending') {
          this.loading = true
        } else {
          this.loading = false
        }
      }
    }
  }
}
</script>

<style scoped>
.form {
  padding: 2rem;
}
.form_item {
  display: block;
  margin: 2rem 0;
  text-align: left;
}
.form_item > label {
  color: green;
  font-weight: 700;
  font-size: 21px;
  text-align: left;
}
.form_item > input,
.form_item > textarea {
  margin-top: 1rem;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid green;
  color: green;
  padding: 0.75rem 1rem;
  font-size: 16px;
  border-radius: 4px;
}
*::placeholder {
  color: green;
  opacity: 0.3;
}
.form_button {
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  color: #ffffff;
  background: green;
  border-radius: 8px;
  font-size: 16px;
}
</style>