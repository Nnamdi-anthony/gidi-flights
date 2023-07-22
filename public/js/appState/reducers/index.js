import { combineReducers } from 'redux';
import FlightsReducer from './FlightsReducer';

export default combineReducers({
	search_results: FlightsReducer
});
