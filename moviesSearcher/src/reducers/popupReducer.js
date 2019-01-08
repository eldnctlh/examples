import { ADD_POPUP, CLOSE_POPUP } from "../consts";


let popupReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_POPUP:
            return [{
                title: action.payload.title, 
                src: action.payload.src,
                date: action.payload.date,
                desc: action.payload.desc,
                video : action.payload.video
            }]
        case CLOSE_POPUP: 
            return []
        default: 
            return state;
    }
};

export default popupReducer;