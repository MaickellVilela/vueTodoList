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
            <li>R$ {{item.preco.toFixed(2)}}</li>
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
            retornaLista(){
                return this.list;
            },
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
                this.clearInput();
                this.list = [];
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
                } else {
                    this.totalSomado = 0;
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

    ul {
        padding:0px;
        margin:0px;
        background-color:#EDEDED;
        list-style:none;
    }

    ul li { display: inline; }

    ul li a {
        padding: 2px 10px;
        display: inline-block;

        /* visual do link */
        background-color:#EDEDED;
        color: #333;
        text-decoration: none;
        border-bottom:3px solid #EDEDED;
    }
    ul li a:hover {
        background-color:#D6D6D6;
        color: #6D6D6D;
        border-bottom:3px solid #EA0000;
    }
</style>