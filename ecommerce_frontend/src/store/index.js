import {createStore} from 'vuex'
import {parse} from "../../../venv/lib/python3.8/site-packages/rest_framework/static/rest_framework/js/coreapi-0.1.1";

export default createStore({
    state: {
        cart: {
            items: [],
        },
        isAuthenticated: false,
        token: '',
        isLoading: false
    },
    getters: {},
    mutations: {
        initializeStore(state) {
            if (localStorage.getItem('cart')) {
                state.cart = JSON.parse(localStorage.getItem('cart'))
            } else {
                localStorage.setItem('cart', JSON.stringify(this.state.cart))
            }
        },
        addToCart(state, item) {
            const exists = state.cart.items.filter(i => i.product.id === item.product.id)

            if(exists.length) {
                exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
            }
        }
    },
    actions: {},
    modules: {}
})
