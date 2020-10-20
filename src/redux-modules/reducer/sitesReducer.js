import { END_LOAD_SITES, START_LOAD_SITES } from '../actions/siteListActions';

const initialState = {
    list: [],
    isLoading: true,
    isExtendable: true,
    searchString: 'Ahaus',
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
                list: action.skip === 0
                    ? action.payload.slice(0, 20)
                    : [...state.list, ...action.payload.slice(0, 20)],
                isLoading: false,
                isExtendable: action.payload.length === 21,
            };
        default:
            return state;
    }
};

export default sitesReducer;
