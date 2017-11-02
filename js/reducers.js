import trucks from '../trucks_data.json'
import _ from 'lodash'

import {
    LOAD_TRUCKS,
    LOAD_TRUCK,
    CHANGE_ACTIVE_TRUCK_IMG,
    FILTER_SEARCH_RESULTS,
    RESET_SEARCH
} from './actions'

const DEFAULT_STATE = {
    all_results: Object.keys(trucks).map(index => trucks[index]),
    filtered_results: Object.keys(trucks).map(index => trucks[index]),
    active_truck_img: ""
}

const rootReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case LOAD_TRUCKS:
            return state
        case LOAD_TRUCK:
            return state
        case CHANGE_ACTIVE_TRUCK_IMG:
            let {truck_id, active_img_index} = action.payload;
            let active_img_url = state.filtered_results.filter(truck => truck.id == truck_id).map(truck => truck.images[active_img_index])[0]
            return {...state, active_truck_img: active_img_url}
        case FILTER_SEARCH_RESULTS:
            let { filter_type, filter_value } = action.payload
            let filteredResults = state.all_results.filter(truck => truck[filter_type] == filter_value)
            return {...state, filtered_results: filteredResults}
        case RESET_SEARCH:
            return {...state, filtered_results: state.all_results}
        default:
            return state
    }
}

export default rootReducer;
