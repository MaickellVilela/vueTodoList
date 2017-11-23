<template>
    <button type="button"
           @click="$emit('click', $event.target.value)">
           {{label}}
    </button>
</template>

<script>
    export default {
        name: 'buttonReiniciar',
        props: {
            label: String
        }
    }
</script>

<style lang="scss" scoped>
	button {
		color: #fff;
    	background-color: #28a745;
    	border-color: #28a745;
    	display: inline-block;
	    font-weight: 400;
	    text-align: center;
	    white-space: nowrap;
	    vertical-align: middle;
	    -webkit-user-select: none;
	    -moz-user-select: none;
	    -ms-user-select: none;
	    user-select: none;
	    border: 1px solid transparent;
	    padding: .375rem .75rem;
	    font-size: 1rem;
	    line-height: 1.5;
	    border-radius: .25rem;
	    transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
	}
</style>