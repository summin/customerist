import { customersConstants } from '../_constants';
import { customersService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const customersActions = {
    submit,
    modify,
    get
};

function submit(customers) {

    return dispatch => {
        dispatch(request());
        customersService.submit(customers)
            .then(
                res => {
                    dispatch(success(res));
                    dispatch(alertActions.clear());
                    dispatch(alertActions.success(`Customer ${""} Submitted`));
                },

                error => {
                    dispatch(failure(error.toString())),
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: customersConstants.SUBMIT_REQUEST, customers } }
    function success(customers) { return { type: customersConstants.SUBMIT_SUCCESS, customers } }
    function failure(error) { return { type: customersConstants.SUBMIT_FAILURE, error } }
}

function get(attr) {
    return dispatch => {
        
        dispatch(request());

        customersService.get(attr)
            .then(
                res => {
                    dispatch(success(res));
                    dispatch(alertActions.clear());
                    dispatch(alertActions.success(`Received ${res.length} items`));
                },

                error => {
                    dispatch(failure(error.toString())),
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: customersConstants.GET_REQUEST } }
    function success(res) { return { type: customersConstants.GET_SUCCESS, res } }
    function failure(error) { return { type: customersConstants.GET_FAILURE, error } }
}

function modify(customers) {
    return dispatch => {
        
        dispatch(request());

        customersService.modify(customers)
            .then(
                res => {
                    dispatch(success(res));
                    dispatch(alertActions.clear());
                    dispatch(alertActions.success(`Successfully Modified`));
                },

                error => {
                    dispatch(failure(error.toString())),
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: customersConstants.MODIFY_REQUEST } }
    function success(res) { return { type: customersConstants.MODIFY_SUCCESS, res } }
    function failure(error) { return { type: customersConstants.MODIFY_FAILURE, error } }
}


// SUBMIT

