import { contentConstants } from '../_constants';

//////////
// NAV //
//////////

export const expandNav = () => {
    return {
        type: contentConstants.NAV_EXPAND
    }
}


/////////////
// CONTENT //
/////////////

export const getContentFocus = (focus) => {

    return {
        type: contentConstants.CONTENT_FOCUS,
        focus: focus.currentTarget.value
    }
}
