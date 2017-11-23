<template>
    <div class="count">{{contador}}</div>
</template>

<script>
    export default {
        name: 'contadorField',
        props: {
          contador: String
        }
    }
</script>

<style lang="scss" scoped>
    .count {
        text-align: right;
        margin-right: 3rem;
    }
</style>