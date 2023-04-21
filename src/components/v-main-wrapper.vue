<template>
    <div class="v-main-wrapper">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>

export default {
    name: 'v-main-wrapper',
    data() {
        return {
            title: 'Main wrapper'
        }
    },
    computed: {}
}
</script>

<style scoped>
    .v-main-wrapper {
        max-width: 900px;
        margin: 0 auto;
    }
</style>