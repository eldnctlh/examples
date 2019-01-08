import topReducer from "./topReducer";
import mainReducer from "./mainReducer";
import { combineReducers } from "redux";
import popupReducer from "./popupReducer";

export default combineReducers({
    load: topReducer,
    main: mainReducer,
    popup: popupReducer
})