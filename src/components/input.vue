<template>
    <input type="text"
           :value="inputValue"
           :placeholder="placeholder"
           @change="$emit('change', $event.target.value)">
</template>

<script>
    export default {
        name: 'inputField',
        props: {
            inputValue: String,
            placeholder: {
                type: String,
                default: ''
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>