import config from 'config';
import { authHeader } from '../_helpers';

export const customersService = {
    submit,
    modify,
    get
};

function submit(customers) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(customers)
    };
    return fetch(`${config.apiUrl}/kunden`, requestOptions).then(handleResponse);
}



function get(attr) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/kunden/${attr}`, requestOptions).then(handleResponse);
}

function modify(attr) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(attr)
    };
    return fetch(`${config.apiUrl}/kunden/${attr._id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}