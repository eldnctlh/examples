import { ADD_POPUP } from '../consts';

export default function addPopup(title, src, date, desc, video) {
    return {
        type: ADD_POPUP,
        payload: {
            title, src, date, desc, video
        }
    }
}