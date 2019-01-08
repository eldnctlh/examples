import { ADD_MAIN_SEARCH } from '../consts';

export default function addMinSearch( id, title, src, date, desc, type) {
    return {
        type: ADD_MAIN_SEARCH,
        payload: {
             id, title, src, date, desc, type
        }
    }
}