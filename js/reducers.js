import trucks from '../trucks_data.json'

import {
    LOAD_TRUCKS
} from './actions'

const DEFAULT_STATE = {
    trucks: Object.keys(trucks).map(index => trucks[index])
}

const rootReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case LOAD_TRUCKS:
            return state
        default:
            return state
    }
}

export default rootReducer;
