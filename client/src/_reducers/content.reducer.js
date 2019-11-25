import { contentConstants } from '../_constants';

export const nav = (state = {}, action) => {
    switch (action.type) {
        default:
            return {
                ...state
            }
    }
}

export const content = (state = {}, action) => {
    switch (action.type) {
        case contentConstants.NAV_EXPAND:
            return {
                ...state,
                collapse: !state.collapse
            }
        case contentConstants.CONTENT_REQUEST:
            return {
                ...state,
                content: action.content,
                contentLoaded: action.contentLoaded
            }

        case contentConstants.CONTENT_FOCUS:
            return {
                ...state,
                focus: action.focus,
                collapse: false
            }

        case contentConstants.CONTENT_PUSH_FORM_VALUE:
            return {
                ...state,
                content: {
                    ...state.content,
                    [action.section]: {
                        ...state.content[action.section],
                        [action.key]: action.value
                    }
                }
            }

        case contentConstants.FORM_CONTENT:
            if (action.focus !== state.formFocus) {
                return {
                    ...state,
                    formGroupContent: action.content,
                    formFocus: action.focus
                }
            }
            else return {
                ...state
            }

        default:
            return {
                ...state,
            }
    }
}

export const footer = (state = {}, action) => {
    switch (action.type) {
        default:
            return {
                ...state,
            }
    }
}

