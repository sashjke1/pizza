<template>
    <div class="v-cart">
        <router-link :to="{name: 'catalog'}">
            <div class="v-catalog__link_to_catalog">Назад</div>
        </router-link>
        <h1>Корзина</h1>
        <p v-if="!CART.length">Здесь пока пусто...</p>
        <v-cart-item 
            v-for="(item, index) in CART"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
        />
        <router-link :to="{name: 'ordering'}">
            <div class="v-catalog__link_to_ordering">Оформить заказ</div>
        </router-link>
    </div>
</template>

<script>
import vCartItem from './v-cart-item.vue';
import { mapActions, mapGetters } from 'vuex';



export default {
    name: 'v-cart',
    components: {
        vCartItem
    },
    computed: {
        ...mapGetters([
            'CART'
        ])
    }, 
    methods: {
        ...mapActions([
            'DELETE_FROM_CART'
        ]),
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index)
        }
    }
}
</script>

<style scoped>
    .v-catalog__link_to_catalog {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 16px;
        border: solid 1px gray;
    }

    .v-catalog__link_to_ordering {
        margin: 0 auto;
        padding: 16px;
        border: solid 1px gray;
        text-decoration: none;
        max-width: 100px;
    }
</style>