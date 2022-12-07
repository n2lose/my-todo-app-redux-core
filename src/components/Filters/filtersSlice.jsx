import { FILTER_SEARCH, FILTER_STATUS, FILTER_PRIORITIES } from "../../redux/actions"

const initialFiltersState = {
    search: '',
    status: 'All',
    priorities: []
}

const filtersReducer= (state = initialFiltersState, action)=> {
    switch(action.type) {
        case FILTER_SEARCH:
            return {
                ...state,
                search: action.payload
            }
        case FILTER_STATUS:
            return {
                ...state,
                status: action.payload
            }
        case FILTER_PRIORITIES:
            return {
                ...state,
                priorities: action.payload
            }
        default:
            return state
    }
}

export default filtersReducer