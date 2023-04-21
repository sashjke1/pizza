<template>
    <div class="v-cart-item">
        <img class="v-cart-item__image" :src="cart_item_data.image" alt="">
        <div class="cart_item__info">
            <p> {{ cart_item_data.name }} </p>
            <p> {{ cart_item_data.price }} </p>
            <p> {{ cart_item_data.article }} </p>
        </div>
        <div class="v-cart-item_quantity"> 
            <p>Количество:</p>
            {{ cart_item_data.quantity }} 
        </div>
        <button @click="deleteFromCart">Удалить</button>
    </div>
</template>

<script>
export default {
    name: "v-cart-item",
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    methods: {
        deleteFromCart() {
            this.$emit('deleteFromCart')
        }
    },
    computed: {},
    mounted() {
    const cartItemData = this.cart_item_data;
	cartItemData.quantity = 1
    }
}
</script>

<style scoped>
    .v-cart-item {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 6px 0;
        padding: 16px;
        margin-bottom: 16px;
    }

    .v-cart-item__image {
        max-width: 150px;

    }
</style>