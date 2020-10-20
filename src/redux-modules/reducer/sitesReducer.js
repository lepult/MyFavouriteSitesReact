import { END_LOAD_SITES, START_LOAD_SITES } from '../actions/siteListActions';

export const initialState = {
    isLoading: true,
    isExtendable: true,
    searchString: 'Ahaus',
    ids: [],
    entities: {},
};

const sitesReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOAD_SITES:
            return {
                ...state,
                isLoading: true,
            };
        case END_LOAD_SITES:
            return {
                ...state,
                ids: action.skip === 0
                    ? action.ids.slice(0, 20)
                    : [...state.ids, ...action.ids.slice(0, 20)],
                isLoading: false,
                isExtendable: action.payload.length === 21,
                entities: action.skip === 0
                    ? action.entities
                    : { ...state.entities, ...action.entities },
            };
        default:
            return state;
    }
};

export default sitesReducer;
