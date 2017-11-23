<template>
    <div id="app">
        <h1 v-text="title"></h1>
        <input-field placeholder="seu item aqui"
                     :inputValue="inputValue"
                     @input="updateValue"
                     @change="setItemValue"
                     ></input-field>
        <button @click="addItem">Adicionar Item</button>

        <div v-if="isEmptyItemValue"><small>Informe um valor para o item</small></div>

        <ul v-if="showList">
            <li v-for="(item, index) in list">
                <div class="item">
                    <div>{{item}}</div>
                    <div>
                        <button @click="removeValue(index)">Remover</button>
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
            },
            isEmptyItemValue(){
                console.log(this.errorValue);
                return this.errorValue;
            }
        },
        methods: {
            ...mapMutations([]),
            ...mapActions([]),
            setItemValue(value){
                this.item = value;
            },
            addItem() {

                if(this.item){
                    this.list.push(this.item);
                    this.item = null;
                    this.errorValue = false;
                    this.clearInput();
                    return;
                }
                this.errorValue = true;
            },
            updateValue(value) {
                this.inputValue = value;
            },
            removeValue(index){
                this.list.splice(index, 1);
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
