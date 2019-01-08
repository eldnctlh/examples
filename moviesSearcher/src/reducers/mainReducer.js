import { ADD_MAIN, ADD_MAIN_SEARCH } from "../consts";


let mainReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_MAIN:
            return [...state, {
                id: action.payload.id, 
                title: action.payload.title, 
                src: action.payload.src,
                date: action.payload.date,
                desc: action.payload.desc,
                type: action.payload.type
            }].filter(e => e.type == 'default');
        case ADD_MAIN_SEARCH: 
            state = [{
                id: action.payload.id, 
                title: action.payload.title, 
                src: action.payload.src,
                date: action.payload.date,
                desc: action.payload.desc,
                type: action.payload.type
            }, ...state].filter(e => e.type == 'search');
            state.length > 20 ? state.pop() : null
            return state;
        default: 
            return state;
    }
};

export default mainReducer;