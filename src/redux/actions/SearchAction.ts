
import axios from 'axios';
import {SET_LOADING, SET_SEARCH_RESULT} from "./ActionTypes";
import ApiUrl from "../../config/urls";

export function getSearch(query:string) {
    return (dispatch:Function) => {
        dispatch(setLoading(true))
        const url = ApiUrl.BaseServiceUrl+ApiUrl.SearchServiceUrl+query;
        const message = ''
        return axios.get(url)
            .then(response => {
                dispatch(setLoading(false))
                console.log(response)
                if(response.data.videobysearch === null){
                    dispatch(setSearchResult([]));
                }else {
                    dispatch(setSearchResult(response.data.videobysearch));
                }

            }).catch(error => {
                dispatch(setLoading(false))
                throw(error);
            });
    }
}
const setSearchResult = (searchResult:[]) => {
    return {
        type: SET_SEARCH_RESULT,
        searchResult,
    }
}

const setLoading = (loadingState:boolean) => {
    return {
        type: SET_LOADING,
        loadingState,
    }
}
