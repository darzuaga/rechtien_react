import trucks from '../trucks_data.json'

import {
    LOAD_TRUCKS,
    LOAD_TRUCK,
    CHANGE_ACTIVE_TRUCK_IMG
} from './actions'

const DEFAULT_STATE = {
    trucks: Object.keys(trucks).map(index => trucks[index]),
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
            let active_img_url = state.trucks.filter(truck => truck.id == truck_id).map(truck => truck.images[active_img_index])[0]
            console.log('hey');
            console.log(active_img_url);
            return {...state, active_truck_img: active_img_url}
        default:
            return state
    }
}

export default rootReducer;
