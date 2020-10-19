import { RESET_SITES, START_ADD_SITES, END_ADD_SITES } from '../actions/siteListActions';

const initialState = {
    list: [],
    isLoading: false,
    isExtendable: true,
    searchString: 'Ahaus',
};

const sitesReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_SITES:
            console.log(action.searchString);
            return {
                ...initialState,
                searchString: (action.searchString === '')
                    ? initialState.searchString
                    : action.searchString,
            };
        case START_ADD_SITES:
            return {
                ...state,
                isLoading: true,
            };
        case END_ADD_SITES:
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

export default sitesReducer;
