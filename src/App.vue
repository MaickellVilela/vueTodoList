<template>
    <div id="app">
        <h1 v-text="title"></h1>
        <!-- mostrar a diferença entre  -->
        <input-field placeholder="seu item aqui"
                     :value="pegarInputValue"
                     @input="updateValue"
                     @change="inputWasChanged"></input-field>
        <div><p>Exemplo: Batata custando 21.75 ou Peixe ou Fruta custando 14</p></div>
        <button-reiniciar 
            :label="labelButtonReset"
            @click="acaoButtonReset">
        </button-reiniciar>
        <contador-field 
            :contador="itemsCount">
        </contador-field>
        <ul v-if="showList" v-for="item in list">
            <li>{{item.nome}}</li>
            <li>{{item.preco}}</li>
        </ul>
    </div>
</template>

<script>
    import inputField from './components/input.vue';
    import contadorField from './components/contador.vue';
    import buttonReiniciar from './components/reiniciar.vue';

    export default {
        name: 'app',
        components: {
            inputField,
            contadorField,
            buttonReiniciar
        },
        data () {
            return {
                list: [],
                inputValue: '',
                totalSomado: 0,
                placeholder: 'novo item...',
                title: 'Lista de Compras Before',
                labelButtonReset: 'Reiniciar a compra'
            }
        },
        computed: {
            showList() {
                return this.list.length > 0
            },
            itemsCount() {
                let length = this.list.length;
                return `${length} ${length > 1 ? 'items custando' : 'item custando'} R$ ${this.totalSomado.toFixed(2)}`
            },
            pegarInputValue(){
                return this.inputValue;
            }
        },
        methods: {
            inputWasChanged(value) {
                this.addItem(value);
                this.clearInput();
                this.calcularTotal();
            },
            acaoButtonReset(){
                this.list = [];
                this.clearInput();
                this.calcularTotal();
                alert('Limpo');
            },
            addItem(value) {
                if(value.length > 0){
                    this.list.push(this.quebraValor(value));
                }
            },
            calcularTotal(){
                let length = this.list.length;
                if(length > 0){
                    this.totalSomado = this.list.reduce(function(a, b) {
                        if(typeof a == "object"){
                            return a.preco + b.preco;
                        } else {
                            return a + b.preco;
                        }
                    });
                    if(typeof this.totalSomado == "object"){
                        this.totalSomado = this.totalSomado.preco;
                    }
                }
            },
            quebraValor(value){
                let express = new RegExp(' custando ','gi');
                return this.trataValor(
                            this.formataEntrada(
                                value.split(express)
                            )
                        );
            },
            formataEntrada(vetor){
                if(vetor.length == 2){
                    return {'nome':vetor[0],'preco':parseFloat(vetor[1])};
                }

                return {'nome':vetor[0],'preco':0};
            },
            trataValor({nome="",preco=0}){
                return {nome,preco};
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
</style>