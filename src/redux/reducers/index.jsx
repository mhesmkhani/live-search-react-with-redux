import { combineReducers } from 'redux';
import SearchReducer from './SearchReducer';
import LoadingReducer from './LoadingReducer';
export default combineReducers({
    search: SearchReducer,
    loading: LoadingReducer
})
