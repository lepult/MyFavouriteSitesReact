import { RESET_SITES, ADD_SITES } from '../actions/siteListActions';

const initialState = {
    list: [],
    isLoading: false,
    isExtendable: true,
    searchString: 'Ahaus',
};

const sitesReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_SITES:
            return {
                ...initialState,
                searchString: action.payload,
            };
        case ADD_SITES:
            return {
                ...state,
                list: [...state.list, ...action.payload.slice(0, 20)],
                isLoading: false,
                isExtendable: action.payload.length === 21,
            };
        default:
            return state;
    }
};

export default sitesReducer();
