import { ADD_TOP } from '../consts';

export default function addTop(load, id, title, src, date, desc) {
    return {
        type: ADD_TOP,
        payload: {
            load, id, title, src, date, desc
        }
    }
}