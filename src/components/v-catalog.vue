<template>
    <div class="v-catalog">
        <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            <div class="v-catalog__link_to_cart">Cart: {{ CART.length }}</div>
        </router-link>
        
        <h1>Меню</h1>
        <div class="v-catalog__list">
            <v-catalog-item 
            v-for="product in PRODUCTS"
            :key="product.article"
            :product_data="product"
            @addToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue'
import { mapActions, mapGetters } from 'vuex'


export default {
    name: 'v-catalog',
    components: {
        vCatalogItem
    },
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART'
        ])
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data)
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
    }
}
</script>

<style scoped>
    .v-catalog__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

    .v-catalog__link_to_cart {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 16px;
        border: solid 1px gray;
    }
</style>