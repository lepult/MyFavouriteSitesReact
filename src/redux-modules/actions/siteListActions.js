export const START_EXTEND_SITES = 'START_EXTEND_SITES';

export const EXTEND_SITES = 'EXTEND_SITES';
export const RESET_SITES = 'RESET_SITES';
export const ADD_SITES = 'ADD_SITES';


export const resetSites = (searchString) => ({
    type: RESET_SITES,
    payload: searchString,
});

export const addSites = (data) => ({
    type: ADD_SITES,
    payload: data,
});

export const loadSites = (searchString = 'Ahaus', skip = 0, take = 21) => async (dispatch, getState) => {
    if (skip === 0) {
        dispatch(resetSites(searchString));
    }
    const response = await fetch(`https://chayns2.tobit.com/SiteSearchApi/location/search/${searchString}/?skip=${skip}&take=${take}`);
    if (response.status === 200) {
        const json = await response.json();
        dispatch(addSites(json.Data));
    } else {
        dispatch(addSites([]));
    }
};
