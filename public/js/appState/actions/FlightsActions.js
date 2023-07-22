/* eslint-disable no-undef */
import { FETCH_SEARCH_RESULTS, FILTER_SEARCH_RESULTS } from './types';

export const fetchPosts = () => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
		.then(posts =>
			dispatch({
				type: FETCH_SEARCH_RESULTS,
				payload: posts
			})
		);
};

export const createPosts = postdATA => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(postdATA)
	})
		.then(res => res.json())
		.then(posts =>
			dispatch({
				type: FILTER_SEARCH_RESULTS,
				payload: posts
			})
		);
};
