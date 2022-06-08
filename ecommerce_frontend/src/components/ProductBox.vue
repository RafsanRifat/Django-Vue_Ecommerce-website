<template>
  <div class="column is-2 " >
    <div style="height: 100%" class="box">
      <div class="product-image">
        <figure class="image mb-4">
          <img :src="product.get_thumbnail" alt="">
        </figure>
      </div>
      <div class="product-desc">
        <h3 class="is-size-4">{{ product.name }}</h3>
        <p class="is-size-6 has-text-grey">${{ product.price }}</p>

        <router-link v-bind:to="product.get_absolute_url" class="button is-dark mt-4">view details</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductBox',
  props: {
    product: Object
  }

}
</script>


<style scoped>
.image {
  margin-top: -1.25rem;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
}

.box {
  display: flex;
  flex-direction: column;
}

.product-image {
  flex: 70%;
}

.product-desc {
  flex: 30%;
}

</style>