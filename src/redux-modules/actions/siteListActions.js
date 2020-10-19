export const RESET_SITES = 'RESET_SITES';
export const START_ADD_SITES = 'START_ADD_SITES';
export const END_ADD_SITES = 'END_ADD_SITES';


export const resetSites = (searchString) => ({
    type: RESET_SITES,
    searchString,
});

export const startAddSites = (data) => ({
    type: START_ADD_SITES,
    payload: data,
});
export const endAddSites = (data) => ({
    type: END_ADD_SITES,
    payload: data,
});

export const loadSites = (searchString = 'Ahaus', skip = 0, take = 21) => async (dispatch, getState) => {
    if (skip === 0) {
        dispatch(resetSites(searchString));
    }
    dispatch(startAddSites());

    const response = await fetch(`https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${searchString}&Skip=${skip}&Take=${take}`);

    if (response.status === 200) {
        const json = await response.json();
        dispatch(endAddSites(json.Data === null
            ? []
            : json.Data));
    } else {
        dispatch(endAddSites([]));
    }
};
