import { FETCH_SEARCH_RESULTS, FILTER_SEARCH_RESULTS } from '../actions/types';

const initialState = {
	all_items: [],
	filter_items: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_SEARCH_RESULTS:
			return {
				...state,
				all_items: action.payload
			};
		case FILTER_SEARCH_RESULTS:
			return {
				...state,
				filter_items: action.payload
			};
		default:
			return state;
	}
}
