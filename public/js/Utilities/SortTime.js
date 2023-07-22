/* eslint-disable radix */
/**
 * Sort time form like --:-- accordingly
 * @param {*} array array items to be sorted
 */
const sortTimes = array => {
	return array.sort((a, b) => {
		if (parseInt(a.split(':')[0]) - parseInt(b.split(':')[0]) === 0) {
			return parseInt(a.split(':')[1]) - parseInt(b.split(':')[1]);
		}
		return parseInt(a.split(':')[0]) - parseInt(b.split(':')[0]);
	});
};

export default sortTimes;
