<template>
    <input type="text"
           :value="inputValue"
           :placeholder="placeholder"
           @input="$emit('input', $event.target.value)"
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
    input {
        font-size: 2rem;
        padding: 1rem;
        border-radius: .8rem;
        border: 1px solid #bdbdbd;
        outline: none;
        &:focus {
            border-color: #ff9e00;
            box-shadow: 3px 3px 5px rgba(#ff9e00, 0.4);
        }
    }
</style>