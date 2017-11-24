<template>
    <h1 v-text="title"></h1>
</template>

<script>
    export default {
        name: 'titleField',
        props: {
            title: ''
        }
    }
</script>

<style lang="scss" scoped>

    h1, h2 {
        font-weight: normal;
    }

</style>