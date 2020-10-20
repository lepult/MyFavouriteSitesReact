import { isNullOrWhiteSpace } from 'chayns-components/lib/utils/is';

export const RESET_SITES = 'RESET_SITES';
export const START_ADD_SITES = 'START_ADD_SITES';
export const END_ADD_SITES = 'END_ADD_SITES';


export const resetSites = () => ({
    type: RESET_SITES,
});

export const startAddSites = (data) => ({
    type: START_ADD_SITES,
    payload: data,
});
export const endAddSites = (data) => ({
    type: END_ADD_SITES,
    payload: data,
});

export const loadSites = (searchString, skip = 0, take = 21) => async (dispatch, getState) => {
    if (skip === 0) {
        dispatch(resetSites());
    }
    dispatch(startAddSites());

    const response = await fetch(`https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${
        isNullOrWhiteSpace(searchString)
            ? 'Ahaus'
            : searchString
    }&Skip=${skip}&Take=${take}`);

    if (response.status === 200) {
        const json = await response.json();
        if (skip === 0) {
            dispatch(resetSites());
        }
        dispatch(endAddSites(json.Data === null
            ? []
            : json.Data));
    } else {
        if (skip === 0) {
            dispatch(resetSites());
        }
        dispatch(endAddSites([]));
    }
};
