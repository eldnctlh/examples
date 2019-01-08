import { ADD_MAIN } from '../consts';

export default function addMain(id, title, src, date, desc, type) {
    return {
        type: ADD_MAIN,
        payload: {
            id, title, src, date, desc, type
        }
    }
}