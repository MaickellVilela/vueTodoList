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
        addItem: (state, newItem) => state.list = [ ...state.list, newItem ],
        removeItem: (state, itemToRemoveIndex) => state.list.splice(itemToRemoveIndex, 1)
    },
    actions:{
        requestList({state, getter, commit, dispatch}){
            return axios({
                method: 'get',
                url: 'https://taco-randomizer.herokuapp.com/contributors/base_layers/',
              })
            .then( ({data}) => {
                const getNames = foods => foods.map( food => food.name )
                commit('setList', getNames(data) )
            })
            .catch(function (error) {
              console.log(error)
            });
        }
    }
}