export const InitialState = {
    searchText : ''    
}

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case "CHANGESEARCH":
            return Object.assign({}, state, {searchText:action.payload});

        case "RESETSEARCH":
            return Object.assign({}, state, {searchText:''});

        default:
            return state;
    }
}

export default reducer;