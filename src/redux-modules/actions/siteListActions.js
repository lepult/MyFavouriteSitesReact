import { isNullOrWhiteSpace } from 'chayns-components/lib/utils/is';

export const START_LOAD_SITES = 'START_LOAD_SITES';
export const END_LOAD_SITES = 'END_LOAD_SITES';

export const startLoadSites = (data) => ({
    type: START_LOAD_SITES,
    payload: data,
});
export const endLoadSites = (data, skip) => ({
    type: END_LOAD_SITES,
    payload: data,
    skip,
});

export const loadSites = (searchString, skip = 0, take = 21) => async (dispatch) => {

    dispatch(startLoadSites());

    const response = await fetch(`https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${
        isNullOrWhiteSpace(searchString)
            ? 'Ahaus'
            : searchString
    }&Skip=${skip}&Take=${take}`);

    if (response.status === 200) {
        const json = await response.json();

        dispatch(endLoadSites(
            json.Data === null
                ? []
                : json.Data,
            skip,
        ));
    } else {
        dispatch(endLoadSites([]));
    }
};
