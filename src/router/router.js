import {createRouter, createMemoryHistory} from 'vue-router'
import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'
import orderingForm from '../components/orderingForm'

const routes = [
    {
        path: '/',
        name: 'catalog',
        component: vCatalog,
        props: true
    },
    {
        path: '/cart/:cartItem?',
        name: 'cart',
        component: vCart,
        props: true
    },
    {
        path: '/ordering',
        name: 'ordering',
        component: orderingForm

    }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;