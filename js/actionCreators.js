import { LOAD_TRUCKS, LOAD_TRUCK, CHANGE_ACTIVE_TRUCK_IMG } from './actions'

export function change_active_truck_img(payload){
    return {type: CHANGE_ACTIVE_TRUCK_IMG, payload}
}
