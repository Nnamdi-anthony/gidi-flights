/* eslint-disable import/prefer-default-export */
export const EmptyRequest = {
	flightSearchRequest: {
		sessionId: null,
		supplier: 'amadeus',
		tabHash: null,
		adultCount: 1,
		childCount: 1,
		infantCount: 1,
		originDestinationRequests: [
			{
				RPH: '1',
				origin: 'LOS',
				destination: 'YXU',
				departureDateTime: '2019-02-16T00:00:00'
			}
		],
		passengerType: [
			{ code: 'ADULT', quantity: 1 },
			{ code: 'CHILD', quantity: 0 },
			{ code: 'INFANT', quantity: 0 }
		],
		seatsCount: 1,
		airlines: [],
		cabin: 'ECONOMY',
		saleCategory: 'B2C',
		ticketLocale: 'International',
		tripType: 'ONE_WAY'
	},
	pricedItineraryWSResponses: []
};
