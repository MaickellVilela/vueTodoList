<template>
    <div class="count">
        {{ itemsCount }}
    </div>
</template>

<script>
    export default {
        name: 'counter',
        props: {
            itemsCount: 0
        }
    }
</script>

<style lang="scss" scoped>

    .count {
        text-align: right;
        margin-right: 3rem;
    }

</style>