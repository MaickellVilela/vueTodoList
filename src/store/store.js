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
        // setList: (state, newList) => state.list = newList,
        addItem: (state, newItem) => state.list = [ ...state.list, newItem ],
        removeItem: (state, itemToRemoveIndex) => state.list.splice(itemToRemoveIndex, 1)
    },
    actions:{

    }
}