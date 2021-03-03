import {SET_SEARCH_RESULT} from "../actions/ActionTypes";
const INIT_STATE = {
    searchResult: [],
};
const SearchReducer = (state = INIT_STATE,action) => {
    switch(action.type){
        case SET_SEARCH_RESULT:
            return {...state,searchResult:action.searchResult};
        default:
            return state;

    }
}

export default SearchReducer;

