import { LOAD_TRUCKS, LOAD_TRUCK, CHANGE_ACTIVE_TRUCK_IMG, FILTER_SEARCH_RESULTS, RESET_SEARCH } from './actions'

export function change_active_truck_img(payload){
    return {type: CHANGE_ACTIVE_TRUCK_IMG, payload}
}

export function filterSearchResults(payload){
    return {type: FILTER_SEARCH_RESULTS, payload}
}

export function resetSearch(){
    return {type: RESET_SEARCH}
}
