/**
 * Use this to generate a unique key
 *
 * @export guid
 * @returns string
 */
export function guid() {
	return 'ss-s-s-s-sss'.replace(/s/g, s4);
}

/**
 * use this to generate random numbers from 1 -10000
 *
 * @returns string
 */
function s4() {
	return Math.floor((1 + Math.random()) * 0x10000)
		.toString(16)
		.substring(1);
}
