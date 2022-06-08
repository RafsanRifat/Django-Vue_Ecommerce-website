<template>
  <div class="page-category">
    <div class="columns is-multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered">{{ category.name }}</h2>
      </div>


    </div>
  </div>
</template>


<script>
import axios from "axios";
import {toast} from "bulma-toast";

export default {
  name: 'Category',
  data() {
    return {
      category: {
        products: []
      }
    }
  },
  mounted() {
    this.getCategory()
  },
  methods: {
    getCategory() {
      const categorySlug = this.$route.params.category_slug
      console.log(categorySlug)

      axios
          .get(`/api/v1/products/${categorySlug}`)
          .then(response => {
            this.category = response.data
            document.title = this.category.name + ' | Djacket'
          })
          .catch(error => {
            console.log(error)

            toast({
              message: 'Something went wrong. Please try again',
              type: 'is-success',
              dismissible: true,
              pauseOnHover: true,
              duration: 600,
              position: 'bottom-right',
            })
          })
    }
  }

}
</script>