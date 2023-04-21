<template>
    <div class="orderingForm">
        <router-link :to="{name: 'catalog'}">
            <div class="v-catalog__link_to_catalog">Вернуться</div>
        </router-link>
        <h2>Оформить заказ</h2>
        <div class="form-group">
            <label for="name">Имя:</label>
            <input 
            id="login"
            v-model.trim="name"
            class="form-control"
            >
        </div>
        <div class="form-group">
            <label for="phone">Телефон:</label>
            <input 
            id="phone"
            v-model.trim="phone"
            type="number"
            class="form-control"
            >
        </div>
        <div class="form-group">
            <label for="address">Адрес:</label>
            <input 
            id="address"
            v-model.trim="address"
            class="form-control"
            >
        </div>
        <div class="payment">
            <div class="form-check">
                <input  type="radio" value="cash" name="exampleRadios" id="cash" v-model="payment" >
                <label class="form-check-label" for="cash">
                    Оплата наличными
                </label>
            </div>
            <div class="form-check">
                <input type="radio" value="non-cash" name="exampleRadios" id="non-cash" v-model="payment">
                <label class="form-check-label" for="non-cash">
                    Оплата картой
                </label>
             </div>
        </div>
        <button @click="sendOrdering" type="button">Оформить заказ</button>
    </div>
</template>

<script>
export default {
    name: 'orderingForm',
    data() {
        return {
            name: '',
            phone: '',
            address: '',
            payment: 'cash'
        }
    },
    methods: {
        sendOrdering() {
            console.log('Заказ отпралвен!');
        }
    }
}
</script>

<style scoped>

    .orderingForm {
        text-align: left;
    }
    .form-group {
        margin-bottom: 8px;
        max-width: 450px;
    }

    .form-group input {
        height: calc(2.25rem + 2px);
        width: 100%;
    }
    .payment {
        display: flex;
        margin: 20px 0px;
    }
    .form-check {
        margin-right: 20px;
    }

    .v-catalog__link_to_catalog {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 16px;
        border: solid 1px gray;
    }
</style>