import { alertConstants } from '../_constants';
import { contentConstants } from '../_constants';

export function alert(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                type: 'success',
                message: action.message
            };
        case alertConstants.ERROR:
            return {
                type: 'danger',
                message: action.message
            };
        case contentConstants.CONTENT_FOCUS:
            return {};
        case alertConstants.CLEAR:
            return {};
        default:
            return state
    }
}