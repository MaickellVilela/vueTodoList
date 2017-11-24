<template>

    <ul v-if="showList">
        <li v-for="item in itens">{{item}}</li>
    </ul>

</template>

<script>
    export default {
        name: 'list',
        props: {
            showList: true,
            itens: []
        }
    }
</script>

<style lang="scss" scoped>

    ul {
        list-style-type: none;
        padding: 0;
        border: 1px solid #bdbdbd;
    }

    li {
        display: block;
        margin: 0 10px;
        font-size: 2rem;
    }


</style>