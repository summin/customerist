import { customersConstants } from '../_constants';

export function customers(state = {}, action) {
    switch (action.type) {
        case customersConstants.SUBMIT_REQUEST || customersConstants.GET_REQUEST:
            return {
                loading: true
            };
        case customersConstants.SUBMIT_SUCCESS:
            return {
                loading: false
            };
        case customersConstants.GET_REQUEST:
            return {
                loading: false,
                entries: ""
            };
        case customersConstants.GET_SUCCESS:
            return {
                loading: false,
                entries: action.res
            };
        case customersConstants.SUBMIT_FAILURE || customersConstants.GET_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}