export function cstm_format_date(date_cstm) {
	var data = new Date(date_cstm).toLocaleDateString([], {
		weekday: 'short',
		day: 'numeric',
		year: 'numeric',
		month: 'short'
	});

	return data;
}
