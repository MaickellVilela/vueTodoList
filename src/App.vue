<template>
    <div id="app">
        <h1 v-text="title"></h1>
        <input-field placeholder="seu item aqui"
                     :inputValue="inputValue"
                     @input="updateValue"
                     ></input-field>
        <button @click="addItem(inputValue)">Adicionar Item</button>

        <div v-if="isEmptyItemValue"><small>Informe um valor para o item</small></div>

        <ul v-if="showList">
            <li v-for="(item, index) in getList">
                <div class="item">
                    <div>{{item}}</div>
                    <div>
                        <button @click="removeItem(index)">Remover</button>
                    </div>
                </div>
            </li>
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
                inputValue: '',
                placeholder: 'novo item...',
                title: 'Lista de Compras Before'
            }
        },
        computed: {
            ...mapGetters([
                'getList'
            ]),
            showList() {
                return this.getList.length > 0
            },
            itemsCount() {
                let length = this.getList.length;
                return `${length} ${length > 1 ? 'items' : 'item'}`
            },
            isEmptyItemValue(){
                console.log(this.errorValue);
                return this.errorValue;
            }
        },
        methods: {
            ...mapMutations([
                'addItem',
                'removeItem'
            ]),
            ...mapActions([]),
            updateValue(value) {
                this.inputValue = value;
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
        padding: 0.5rem;
        border: 1px solid #bdbdbd;
        width: 50%;
    }

    li {
        display: block;
        margin: 0 10px;
        font-size: 2rem;
        padding: 0.5rem;

    }

    li div.item{
        clear: both;
    }

    li div.item div:first-child {
        float: left;
        width: 500px;
    }
    li div.item{
        text-align: left;
    }

    a {
        color: #42b983;
    }

    input, button {
        font-size: 1rem;
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
