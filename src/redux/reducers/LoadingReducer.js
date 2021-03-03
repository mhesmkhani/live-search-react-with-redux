import {SET_LOADING} from "../actions/ActionTypes";
const INIT_STATE = {
    loadingState: false,
};
const LoadingReducer = (state = INIT_STATE,action) => {
    switch(action.type){
        case SET_LOADING:
            return {loadingState:action.loadingState};
        default:
            return state;

    }
}

export default LoadingReducer;

