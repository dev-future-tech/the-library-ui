<script lang="ts">
import ProductView from '../components/ProductView.vue'
import LibraryService from '../service/product_service'
import type { Book } from '../service/product_service'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductListing',
  components: {
    ProductView,
  },
  data() {
    return {
      foundBooks: [] as Book[],
    }
  },
  methods: {
    retrieveBooks() {
      LibraryService.getBooks()
        .then((books: Book[]) => {
          this.foundBooks = books
        })
        .catch((e: Error) => {
          console.error(e)
        })
    },
  },
  mounted() {
    this.retrieveBooks()
    console.log('Mounted')
  },
  props: ['totalBooks'],
})
</script>

<template>
  <main>
    <p v-for="row of foundBooks" v-bind:key="row.book_id">
      <ProductView :product_name="row.title" :product_description="row.genre" />
    </p>
  </main>
</template>
