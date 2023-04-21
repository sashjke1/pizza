<template>
    <div class="v-catalog-item">
        <img :src="product_data.image" width="250">
        <p class="v-catalog-item__name"> {{ product_data.name }}</p>
        <p class="v-catalog-item__price">Цена: {{ product_data.price }}р.</p>
        <button 
            class="v-catalog-item__add_to_cart btn" 
            @click="addToCart"  
            type="button"
            >Добавить в корзину
        </button>
    </div>
</template>

<script>

export default {
    name: 'v-catalog-item',
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        addToCart() {
            this.$emit('addToCart' ,this.product_data);
        }
    }
}
</script>

<style scoped>
    .v-catalog-item {
        flex-basis: 25%;
        box-shadow: 0 0 6px 0;
        padding: 16px;
        margin-bottom: 16px;
    }
</style>