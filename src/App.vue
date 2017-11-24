<template>
    <div id="app">

        <title-field :title="title"></title-field>

        <input-field placeholder="seu item aqui"
                     :inputValue="inputValue"
                     @input="updateValue">
        </input-field>

        <button @click="addItemToList">
            + Adicionar
        </button>

        <list :showList="showList"
              :itens="list">
        </list>

        <counter :itemsCount="itemsCount"></counter>
    </div>
</template>

<script>
    import inputField from './components/input.vue';
    import titleField from './components/title.vue';
    import counter from './components/counter.vue';
    import list from './components/list.vue';

    export default {
        name: 'app',
        components: {
            inputField,
            titleField,
            counter,
            list
        },
        data () {
            return {
                list: [],
                inputValue: '',
                placeholder: 'novo item...',
                title: 'Lista de Compras Before'
            }
        },
        computed: {
            showList() {
                return this.list.length > 0
            },
            itemsCount() {
                let length = this.list.length;
                return `${length} ${length > 1 ? 'items' : 'item'}`
            }
        },
        methods: {
            addItemToList() {
                this.addItem(this.inputValue);
                this.clearInput();
            },
            addItem(value) {
                this.list.push(value)
            },
            updateValue(value) {
                this.inputValue = value;
            },
            clearInput() {
                this.inputValue = '';
            }
        }
    }
</script>

<style lang="scss">

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    a {
        color: #42b983;
    }

</style>
