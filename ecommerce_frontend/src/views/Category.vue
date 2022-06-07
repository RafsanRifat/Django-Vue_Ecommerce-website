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
    getCategory(){
      const categorySlug = this.$route.params.category_slug
      console.log(categorySlug)
    }
}

}
</script>