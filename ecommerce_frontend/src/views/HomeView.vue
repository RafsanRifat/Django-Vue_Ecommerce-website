<template>
  {{ product }}
  <div class="home">
    <section class="hero is-medium is-dark mb-6">
      <div class="hero-body has-text-centered">
        <p class="title mb-6">
          Welcome to Djacket
        </p>
        <p class="subtitle">
          The best jacket store online
        </p>
      </div>
    </section>

    <div class="columns is-multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered">Latest Products</h2>
      </div>

<!--      <div class="column is-2 " v-for="product in latestProducts" v-bind:key="product.id">-->
<!--        <div style="height: 100%" class="box">-->
<!--          <div class="product-image">-->
<!--            <figure class="image mb-4">-->
<!--              <img :src="product.get_thumbnail" alt="">-->
<!--            </figure>-->
<!--          </div>-->
<!--          <div class="product-desc">-->
<!--            <h3 class="is-size-4">{{ product.name }}</h3>-->
<!--            <p class="is-size-6 has-text-grey">${{ product.price }}</p>-->

<!--            <router-link v-bind:to="product.get_absolute_url" class="button is-dark mt-4">view details</router-link>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

      <ProductBox v-for="product in latestProducts" v-bind:key="product.id" v-bind:product="product"></ProductBox>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import ProductBox from "@/components/ProductBox";


export default {
  name: 'HomeView',
  components: {
    ProductBox
  },
  data() {
    return {
      latestProducts: []
    }
  },
  mounted() {
    this.getLatestProducts()
    document.title = 'Home | Djackets'
  },
  methods: {
    getLatestProducts() {
      axios
          .get('/api/v1/latest-products/')
          .then(res => {
            // console.log(res)
            this.latestProducts = res.data
          })
          .catch(err => {
            console.log(err)
          })
    }
  }
}
</script>


