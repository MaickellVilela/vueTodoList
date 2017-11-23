<template>
    <div id="app">
        <h1 v-text="title"></h1>
        <!-- mostrar a diferença entre  -->
        <input-field placeholder="seu item aqui"
                     :inputValue="inputValue"
                     @input="updateValue"
                     @change="inputWasChanged"></input-field>
        <ul v-if="showList">
            <li v-for="item in list">{{item}}</li>
        </ul>
        <div class="count">{{ itemsCount }}</div>
    </div>
</template>

<script>
    import inputField from './components/input.vue';
    import { mapGetters, mapMutations, mapActions } from 'vuex';

    export default {
        name: 'app',
        components: {
            inputField
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
            ...mapGetters([]),
            showList() {
                return this.list.length > 0
            },
            itemsCount() {
                let length = this.list.length;
                return `${length} ${length > 1 ? 'items' : 'item'}`
            }
        },
        methods: {
            ...mapMutations([]),
            ...mapActions([]),
            inputWasChanged(value) {
                this.addItem(value);
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

    h1, h2 {
        font-weight: normal;
    }

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

    a {
        color: #42b983;
    }

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

    .count {
        text-align: right;
        margin-right: 3rem;
    }
</style>
