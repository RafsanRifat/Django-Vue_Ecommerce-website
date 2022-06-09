<template>
  <div class="page-cart">
    <div class="column is_multiline">
      <div class="column is-12">
        <h1 class="title">Cart</h1>
      </div>

      <div class="column is-12 box">
        <table class="table is-full-width">
          <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
          </thead>

          <tbody>
          <CartItem v-for="item in cart.items" v-bind:key="item.product.id" v-bind:initialItem="item"></CartItem>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import CartItem from "@/components/CartItem"

export default {
  name: 'Cart',
  components: {
    CartItem
  },
  data() {
    return {
      cart: {
        item: []
      }
    }
  },
  mounted() {
    this.cart = this.$store.state.cart
  }
}
</script>