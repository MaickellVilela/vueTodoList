<template>
    <input type="text"
           :value="value"
           :placeholder="placeholder"
           @input="$emit('input', $event.target.value)"
           @change="$emit('change', $event.target.value)">
</template>

<script>
    export default {
        name: 'inputField',
        props: {
            value: String,
            placeholder: {
                type: String,
                default: ''
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>