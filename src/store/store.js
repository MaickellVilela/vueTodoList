import axios from 'axios';

export default {
    state:{
        list: [
            'banana',
            'bolo',
            'cerveja'
        ]
    },
    getters:{
        getList: (state) => state.list
    },
    mutations:{
        setList: (state, newList) => state.list = newList,
        addItem: (state, newItem) => state.list = [ ...state.list, {name:newItem, qtd: 1} ],
        removeItem: (state, itemToRemoveIndex) => state.list.splice(itemToRemoveIndex, 1),
        addQuantity: (state, indexToAddQtd) => state.list[indexToAddQtd].qtd++,
        subQuantity: (state, indexToAddQtd) => state.list[indexToAddQtd].qtd--       
    },
    actions:{
        requestList({state, getter, commit, dispatch}){
            return axios({
                method: 'get',
                url: 'https://taco-randomizer.herokuapp.com/contributors/base_layers/',
              })
            .then( ({data}) => {
                const getNames = foods => foods.map( food => ({name:food.name, qtd: 1}) )
                commit('setList', getNames(data) )
            })
            .catch(function (error) {
              console.log(error)
            });
        },
        subQuantity({state, commit}, indexToAddQtd){
            commit('subQuantity', indexToAddQtd )
            if( state.list[indexToAddQtd].qtd === 0 ){
                commit('removeItem', indexToAddQtd)
            }
        }
    }
}