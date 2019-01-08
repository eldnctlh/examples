import { ADD_TOP } from "../consts";

let topReducer = (state = {}, action) => {
    switch(action.type) {
        case ADD_TOP: 
            state[action.payload.load] ? (
                state[action.payload.load].push({
                    id: action.payload.id, 
                    title: action.payload.title, 
                    src: action.payload.src,
                    date: action.payload.date,
                    desc: action.payload.desc,
                })
            ) : (
                state[action.payload.load] = [],
                state[action.payload.load].push({
                    id: action.payload.id, 
                    title: action.payload.title, 
                    src: action.payload.src,
                    date: action.payload.date,
                    desc: action.payload.desc,
                })
            )
        default: 
            return state;
    }

};

export default topReducer;