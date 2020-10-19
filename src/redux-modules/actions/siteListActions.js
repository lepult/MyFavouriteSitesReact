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
    const response = await fetch(`https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${searchString}&Skip=${skip}&Take=${take}`);
    if (response.status === 200) {
        const json = await response.json();
        console.log(json.Data);

        dispatch(addSites(json.Data));
    } else {
        dispatch(addSites([]));
    }
};
