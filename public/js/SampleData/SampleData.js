/* eslint-disable import/prefer-default-export */
export const SampleTravelDenData = {
	flightSearchRequest: {
		sessionId: null,
		supplier: 'amadeus',
		tabHash: null,
		adultCount: 1,
		childCount: 0,
		infantCount: 0,
		originDestinationRequests: [
			{
				RPH: '1',
				origin: 'LOS',
				destination: 'KAN',
				departureDateTime: '2019-01-19T00:00:00'
			},
			{
				RPH: '2',
				origin: 'KAN',
				destination: 'LOS',
				departureDateTime: '2019-01-26T00:00:00'
			}
		],
		passengerType: [{ code: 'ADULT', quantity: 1 }],
		seatsCount: 1,
		airlines: [],
		cabin: 'ECONOMY',
		saleCategory: 'B2C',
		ticketLocale: 'Local',
		tripType: 'RETURN'
	},
	pricedItineraryWSResponses: [
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T11:00:00',
								arrivalDateTime: '2019-01-19T12:00:00',
								duration: '02h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7122',
								resBookDesigCode: 'L',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T12:40:00',
								arrivalDateTime: '2019-01-19T13:30:00',
								duration: '02h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'K',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-19T13:30:00',
						departureDateTime: '2019-01-19T11:00:00',
						duration: '02h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '0H:40M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:05:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '01h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7425',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T14:05:00',
						duration: '01h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 0,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: null
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 56600,
				gdsTaxFare: 18328,
				gdsTotalFare: 74928,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 56600 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 18328
					}
				],
				internalTaxes: [],
				totalFare: 74928,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 0,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T07:30:00',
								arrivalDateTime: '2019-01-19T08:45:00',
								duration: '06h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7480',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T12:40:00',
								arrivalDateTime: '2019-01-19T13:30:00',
								duration: '06h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'K',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-19T13:30:00',
						departureDateTime: '2019-01-19T07:30:00',
						duration: '06h:00m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '3H:55M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:05:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '01h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7425',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T14:05:00',
						duration: '01h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 0,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: null
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 56600,
				gdsTaxFare: 18328,
				gdsTotalFare: 74928,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 56600 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 18328
					}
				],
				internalTaxes: [],
				totalFare: 74928,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 1,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T07:20:00',
								arrivalDateTime: '2019-01-19T08:20:00',
								duration: '06h:10m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7120',
								resBookDesigCode: 'K',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T12:40:00',
								arrivalDateTime: '2019-01-19T13:30:00',
								duration: '06h:10m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'K',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-19T13:30:00',
						departureDateTime: '2019-01-19T07:20:00',
						duration: '06h:10m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '4H:20M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:05:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '01h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7425',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T14:05:00',
						duration: '01h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 0,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: null
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 60400,
				gdsTaxFare: 18708,
				gdsTotalFare: 79108,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 60400 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 18708
					}
				],
				internalTaxes: [],
				totalFare: 79108,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 2,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T16:55:00',
								arrivalDateTime: '2019-01-19T17:55:00',
								duration: '19h:35m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7156',
								resBookDesigCode: 'L',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T11:40:00',
								arrivalDateTime: '2019-01-20T12:30:00',
								duration: '19h:35m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'B',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-20T12:30:00',
						departureDateTime: '2019-01-19T16:55:00',
						duration: '19h:35m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '17H:45M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:05:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '01h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7425',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T14:05:00',
						duration: '01h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 0,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: null
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 66000,
				gdsTaxFare: 19268,
				gdsTotalFare: 85268,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 66000 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 19268
					}
				],
				internalTaxes: [],
				totalFare: 85268,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 3,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T11:00:00',
								arrivalDateTime: '2019-01-19T12:00:00',
								duration: '25h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7122',
								resBookDesigCode: 'L',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T11:40:00',
								arrivalDateTime: '2019-01-20T12:30:00',
								duration: '25h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'B',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-20T12:30:00',
						departureDateTime: '2019-01-19T11:00:00',
						duration: '25h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '23H:40M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:05:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '01h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7425',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T14:05:00',
						duration: '01h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 0,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: null
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 66000,
				gdsTaxFare: 19268,
				gdsTotalFare: 85268,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 66000 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 19268
					}
				],
				internalTaxes: [],
				totalFare: 85268,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 4,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T08:30:00',
								arrivalDateTime: '2019-01-19T09:40:00',
								duration: '05h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7232',
								resBookDesigCode: 'B',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T12:40:00',
								arrivalDateTime: '2019-01-19T13:30:00',
								duration: '05h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'K',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-19T13:30:00',
						departureDateTime: '2019-01-19T08:30:00',
						duration: '05h:00m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '3H:0M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:05:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '01h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7425',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T14:05:00',
						duration: '01h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 0,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: null
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 69800,
				gdsTaxFare: 19648,
				gdsTotalFare: 89448,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 69800 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 19648
					}
				],
				internalTaxes: [],
				totalFare: 89448,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 5,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T17:10:00',
								arrivalDateTime: '2019-01-19T18:25:00',
								duration: '19h:20m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7138',
								resBookDesigCode: 'K',
								airEquipType: '733',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T11:40:00',
								arrivalDateTime: '2019-01-20T12:30:00',
								duration: '19h:20m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'B',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-20T12:30:00',
						departureDateTime: '2019-01-19T17:10:00',
						duration: '19h:20m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '17H:15M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:05:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '01h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7425',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T14:05:00',
						duration: '01h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 0,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: null
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 69800,
				gdsTaxFare: 19648,
				gdsTotalFare: 89448,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 69800 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 19648
					}
				],
				internalTaxes: [],
				totalFare: 89448,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 6,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Calabar-Margaret Ekpo Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'CBQ',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T13:10:00',
								arrivalDateTime: '2019-01-19T14:10:00',
								duration: '45h:50m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7180',
								resBookDesigCode: 'L',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Calabar-Margaret Ekpo Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'CBQ',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T12:40:00',
								arrivalDateTime: '2019-01-20T13:40:00',
								duration: '45h:50m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7183',
								resBookDesigCode: 'L',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-21T10:10:00',
								arrivalDateTime: '2019-01-21T11:00:00',
								duration: '45h:50m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-21T11:00:00',
						departureDateTime: '2019-01-19T13:10:00',
						duration: '45h:50m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 2,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '43h:0m'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:05:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '01h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7425',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T14:05:00',
						duration: '01h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 0,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: null
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 70400,
				gdsTaxFare: 23199,
				gdsTotalFare: 93599,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 70400 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 23199
					}
				],
				internalTaxes: [],
				totalFare: 93599,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 7,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Port Harcourt-Port Harcourt Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'PHC',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T13:30:00',
								arrivalDateTime: '2019-01-19T14:30:00',
								duration: '45h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7192',
								resBookDesigCode: 'M',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Port Harcourt-Port Harcourt Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'PHC',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T09:30:00',
								arrivalDateTime: '2019-01-20T10:30:00',
								duration: '45h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7194',
								resBookDesigCode: 'L',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-21T10:10:00',
								arrivalDateTime: '2019-01-21T11:00:00',
								duration: '45h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-21T11:00:00',
						departureDateTime: '2019-01-19T13:30:00',
						duration: '45h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 2,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '42h:40m'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:05:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '01h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7425',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T14:05:00',
						duration: '01h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 0,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: null
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 70800,
				gdsTaxFare: 23239,
				gdsTotalFare: 94039,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 70800 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 23239
					}
				],
				internalTaxes: [],
				totalFare: 94039,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 8,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T11:00:00',
								arrivalDateTime: '2019-01-19T12:00:00',
								duration: '02h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7122',
								resBookDesigCode: 'L',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T12:40:00',
								arrivalDateTime: '2019-01-19T13:30:00',
								duration: '02h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'K',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-19T13:30:00',
						departureDateTime: '2019-01-19T11:00:00',
						duration: '02h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '0H:40M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T11:05:00',
								arrivalDateTime: '2019-01-26T11:35:00',
								duration: '04h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7423',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:20:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '04h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7429',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T11:05:00',
						duration: '04h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '2H:45M'
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 74200,
				gdsTaxFare: 23579,
				gdsTotalFare: 97779,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 74200 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 23579
					}
				],
				internalTaxes: [],
				totalFare: 97779,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 9,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T07:30:00',
								arrivalDateTime: '2019-01-19T08:45:00',
								duration: '06h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7480',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T12:40:00',
								arrivalDateTime: '2019-01-19T13:30:00',
								duration: '06h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'K',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-19T13:30:00',
						departureDateTime: '2019-01-19T07:30:00',
						duration: '06h:00m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '3H:55M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T11:05:00',
								arrivalDateTime: '2019-01-26T11:35:00',
								duration: '04h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7423',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:20:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '04h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7429',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T11:05:00',
						duration: '04h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '2H:45M'
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 74200,
				gdsTaxFare: 23579,
				gdsTotalFare: 97779,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 74200 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 23579
					}
				],
				internalTaxes: [],
				totalFare: 97779,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 10,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T11:00:00',
								arrivalDateTime: '2019-01-19T12:00:00',
								duration: '02h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7122',
								resBookDesigCode: 'L',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T12:40:00',
								arrivalDateTime: '2019-01-19T13:30:00',
								duration: '02h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'K',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-19T13:30:00',
						departureDateTime: '2019-01-19T11:00:00',
						duration: '02h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '0H:40M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T11:05:00',
								arrivalDateTime: '2019-01-26T11:35:00',
								duration: '21h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7423',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-27T07:00:00',
								arrivalDateTime: '2019-01-27T08:10:00',
								duration: '21h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7139',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-27T08:10:00',
						departureDateTime: '2019-01-26T11:05:00',
						duration: '21h:05m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '19H:25M'
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 74200,
				gdsTaxFare: 23579,
				gdsTotalFare: 97779,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 74200 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 23579
					}
				],
				internalTaxes: [],
				totalFare: 97779,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 11,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T07:30:00',
								arrivalDateTime: '2019-01-19T08:45:00',
								duration: '06h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7480',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T12:40:00',
								arrivalDateTime: '2019-01-19T13:30:00',
								duration: '06h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'K',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-19T13:30:00',
						departureDateTime: '2019-01-19T07:30:00',
						duration: '06h:00m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '3H:55M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T11:05:00',
								arrivalDateTime: '2019-01-26T11:35:00',
								duration: '21h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7423',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-27T07:00:00',
								arrivalDateTime: '2019-01-27T08:10:00',
								duration: '21h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7139',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-27T08:10:00',
						departureDateTime: '2019-01-26T11:05:00',
						duration: '21h:05m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '19H:25M'
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 74200,
				gdsTaxFare: 23579,
				gdsTotalFare: 97779,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 74200 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 23579
					}
				],
				internalTaxes: [],
				totalFare: 97779,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 12,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Owerri-Sam Mbakwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'QOW',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T07:30:00',
								arrivalDateTime: '2019-01-19T08:30:00',
								duration: '06h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7150',
								resBookDesigCode: 'L',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Owerri-Sam Mbakwe Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'QOW',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T09:00:00',
								arrivalDateTime: '2019-01-19T10:00:00',
								duration: '06h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7151',
								resBookDesigCode: 'L',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T12:40:00',
								arrivalDateTime: '2019-01-19T13:30:00',
								duration: '06h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'K',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-19T13:30:00',
						departureDateTime: '2019-01-19T07:30:00',
						duration: '06h:00m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 2,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '3h:10m'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:05:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '01h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7425',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T14:05:00',
						duration: '01h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 0,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: null
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 74200,
				gdsTaxFare: 23579,
				gdsTotalFare: 97779,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 74200 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 23579
					}
				],
				internalTaxes: [],
				totalFare: 97779,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 13,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Port Harcourt-Port Harcourt Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'PHC',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T08:55:00',
								arrivalDateTime: '2019-01-19T09:55:00',
								duration: '50h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7190',
								resBookDesigCode: 'K',
								airEquipType: '733',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Port Harcourt-Port Harcourt Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'PHC',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T09:30:00',
								arrivalDateTime: '2019-01-20T10:30:00',
								duration: '50h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7194',
								resBookDesigCode: 'L',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-21T10:10:00',
								arrivalDateTime: '2019-01-21T11:00:00',
								duration: '50h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-21T11:00:00',
						departureDateTime: '2019-01-19T08:55:00',
						duration: '50h:05m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 2,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '47h:15m'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:05:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '01h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7425',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T14:05:00',
						duration: '01h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 0,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: null
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 74200,
				gdsTaxFare: 23579,
				gdsTotalFare: 97779,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 74200 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 23579
					}
				],
				internalTaxes: [],
				totalFare: 97779,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 14,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T11:00:00',
								arrivalDateTime: '2019-01-19T12:00:00',
								duration: '02h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7122',
								resBookDesigCode: 'L',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T12:40:00',
								arrivalDateTime: '2019-01-19T13:30:00',
								duration: '02h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'K',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-19T13:30:00',
						departureDateTime: '2019-01-19T11:00:00',
						duration: '02h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '0H:40M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T11:05:00',
								arrivalDateTime: '2019-01-26T11:35:00',
								duration: '04h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7423',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T13:55:00',
								arrivalDateTime: '2019-01-26T15:10:00',
								duration: '04h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7233',
								resBookDesigCode: 'K',
								airEquipType: '734',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:10:00',
						departureDateTime: '2019-01-26T11:05:00',
						duration: '04h:05m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '2H:20M'
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 78000,
				gdsTaxFare: 23959,
				gdsTotalFare: 101959,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 78000 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 23959
					}
				],
				internalTaxes: [],
				totalFare: 101959,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 15,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T07:30:00',
								arrivalDateTime: '2019-01-19T08:45:00',
								duration: '06h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7480',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T12:40:00',
								arrivalDateTime: '2019-01-19T13:30:00',
								duration: '06h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'K',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-19T13:30:00',
						departureDateTime: '2019-01-19T07:30:00',
						duration: '06h:00m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '3H:55M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T11:05:00',
								arrivalDateTime: '2019-01-26T11:35:00',
								duration: '04h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7423',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T13:55:00',
								arrivalDateTime: '2019-01-26T15:10:00',
								duration: '04h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7233',
								resBookDesigCode: 'K',
								airEquipType: '734',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:10:00',
						departureDateTime: '2019-01-26T11:05:00',
						duration: '04h:05m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '2H:20M'
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 78000,
				gdsTaxFare: 23959,
				gdsTotalFare: 101959,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 78000 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 23959
					}
				],
				internalTaxes: [],
				totalFare: 101959,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 16,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T07:20:00',
								arrivalDateTime: '2019-01-19T08:20:00',
								duration: '06h:10m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7120',
								resBookDesigCode: 'K',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T12:40:00',
								arrivalDateTime: '2019-01-19T13:30:00',
								duration: '06h:10m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'K',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-19T13:30:00',
						departureDateTime: '2019-01-19T07:20:00',
						duration: '06h:10m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '4H:20M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T11:05:00',
								arrivalDateTime: '2019-01-26T11:35:00',
								duration: '04h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7423',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:20:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '04h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7429',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T11:05:00',
						duration: '04h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '2H:45M'
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 78000,
				gdsTaxFare: 23959,
				gdsTotalFare: 101959,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 78000 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 23959
					}
				],
				internalTaxes: [],
				totalFare: 101959,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 17,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T07:20:00',
								arrivalDateTime: '2019-01-19T08:20:00',
								duration: '06h:10m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7120',
								resBookDesigCode: 'K',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T12:40:00',
								arrivalDateTime: '2019-01-19T13:30:00',
								duration: '06h:10m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'K',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-19T13:30:00',
						departureDateTime: '2019-01-19T07:20:00',
						duration: '06h:10m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '4H:20M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T11:05:00',
								arrivalDateTime: '2019-01-26T11:35:00',
								duration: '21h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7423',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-27T07:00:00',
								arrivalDateTime: '2019-01-27T08:10:00',
								duration: '21h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7139',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-27T08:10:00',
						departureDateTime: '2019-01-26T11:05:00',
						duration: '21h:05m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '19H:25M'
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 78000,
				gdsTaxFare: 23959,
				gdsTotalFare: 101959,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 78000 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 23959
					}
				],
				internalTaxes: [],
				totalFare: 101959,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 18,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Owerri-Sam Mbakwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'QOW',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T14:50:00',
								arrivalDateTime: '2019-01-19T15:50:00',
								duration: '44h:10m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7108',
								resBookDesigCode: 'K',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Owerri-Sam Mbakwe Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'QOW',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T15:30:00',
								arrivalDateTime: '2019-01-20T16:10:00',
								duration: '44h:10m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7142',
								resBookDesigCode: 'K',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-21T10:10:00',
								arrivalDateTime: '2019-01-21T11:00:00',
								duration: '44h:10m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-21T11:00:00',
						departureDateTime: '2019-01-19T14:50:00',
						duration: '44h:10m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 2,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '41h:40m'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:05:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '01h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7425',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T14:05:00',
						duration: '01h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 0,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: null
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 78000,
				gdsTaxFare: 23959,
				gdsTotalFare: 101959,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 78000 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 23959
					}
				],
				internalTaxes: [],
				totalFare: 101959,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 19,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T07:20:00',
								arrivalDateTime: '2019-01-19T08:20:00',
								duration: '06h:10m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7120',
								resBookDesigCode: 'K',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T12:40:00',
								arrivalDateTime: '2019-01-19T13:30:00',
								duration: '06h:10m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'K',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-19T13:30:00',
						departureDateTime: '2019-01-19T07:20:00',
						duration: '06h:10m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '4H:20M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T11:05:00',
								arrivalDateTime: '2019-01-26T11:35:00',
								duration: '04h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7423',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T13:55:00',
								arrivalDateTime: '2019-01-26T15:10:00',
								duration: '04h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7233',
								resBookDesigCode: 'K',
								airEquipType: '734',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:10:00',
						departureDateTime: '2019-01-26T11:05:00',
						duration: '04h:05m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '2H:20M'
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 81800,
				gdsTaxFare: 24339,
				gdsTotalFare: 106139,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 81800 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 24339
					}
				],
				internalTaxes: [],
				totalFare: 106139,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 20,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport: 'Benin City, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'BNI',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T08:00:00',
								arrivalDateTime: '2019-01-19T08:45:00',
								duration: '05h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7170',
								resBookDesigCode: 'H',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport: 'Benin City, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'BNI',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T09:10:00',
								arrivalDateTime: '2019-01-19T09:55:00',
								duration: '05h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7171',
								resBookDesigCode: 'L',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T12:40:00',
								arrivalDateTime: '2019-01-19T13:30:00',
								duration: '05h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'K',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-19T13:30:00',
						departureDateTime: '2019-01-19T08:00:00',
						duration: '05h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 2,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '3h:10m'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:05:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '01h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7425',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T14:05:00',
						duration: '01h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 0,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: null
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 83100,
				gdsTaxFare: 24469,
				gdsTotalFare: 107569,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 83100 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 24469
					}
				],
				internalTaxes: [],
				totalFare: 107569,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 21,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T16:55:00',
								arrivalDateTime: '2019-01-19T17:55:00',
								duration: '19h:35m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7156',
								resBookDesigCode: 'L',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T11:40:00',
								arrivalDateTime: '2019-01-20T12:30:00',
								duration: '19h:35m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'B',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-20T12:30:00',
						departureDateTime: '2019-01-19T16:55:00',
						duration: '19h:35m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '17H:45M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T11:05:00',
								arrivalDateTime: '2019-01-26T11:35:00',
								duration: '04h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7423',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:20:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '04h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7429',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T11:05:00',
						duration: '04h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '2H:45M'
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 83600,
				gdsTaxFare: 24519,
				gdsTotalFare: 108119,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 83600 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 24519
					}
				],
				internalTaxes: [],
				totalFare: 108119,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 22,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T11:00:00',
								arrivalDateTime: '2019-01-19T12:00:00',
								duration: '25h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7122',
								resBookDesigCode: 'L',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T11:40:00',
								arrivalDateTime: '2019-01-20T12:30:00',
								duration: '25h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'B',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-20T12:30:00',
						departureDateTime: '2019-01-19T11:00:00',
						duration: '25h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '23H:40M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T11:05:00',
								arrivalDateTime: '2019-01-26T11:35:00',
								duration: '04h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7423',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:20:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '04h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7429',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T11:05:00',
						duration: '04h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '2H:45M'
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 83600,
				gdsTaxFare: 24519,
				gdsTotalFare: 108119,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 83600 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 24519
					}
				],
				internalTaxes: [],
				totalFare: 108119,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 23,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T16:55:00',
								arrivalDateTime: '2019-01-19T17:55:00',
								duration: '19h:35m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7156',
								resBookDesigCode: 'L',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T11:40:00',
								arrivalDateTime: '2019-01-20T12:30:00',
								duration: '19h:35m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'B',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-20T12:30:00',
						departureDateTime: '2019-01-19T16:55:00',
						duration: '19h:35m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '17H:45M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T11:05:00',
								arrivalDateTime: '2019-01-26T11:35:00',
								duration: '21h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7423',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-27T07:00:00',
								arrivalDateTime: '2019-01-27T08:10:00',
								duration: '21h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7139',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-27T08:10:00',
						departureDateTime: '2019-01-26T11:05:00',
						duration: '21h:05m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '19H:25M'
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 83600,
				gdsTaxFare: 24519,
				gdsTotalFare: 108119,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 83600 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 24519
					}
				],
				internalTaxes: [],
				totalFare: 108119,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 24,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T11:00:00',
								arrivalDateTime: '2019-01-19T12:00:00',
								duration: '25h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7122',
								resBookDesigCode: 'L',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T11:40:00',
								arrivalDateTime: '2019-01-20T12:30:00',
								duration: '25h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'B',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-20T12:30:00',
						departureDateTime: '2019-01-19T11:00:00',
						duration: '25h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '23H:40M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T11:05:00',
								arrivalDateTime: '2019-01-26T11:35:00',
								duration: '21h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7423',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-27T07:00:00',
								arrivalDateTime: '2019-01-27T08:10:00',
								duration: '21h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7139',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-27T08:10:00',
						departureDateTime: '2019-01-26T11:05:00',
						duration: '21h:05m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '19H:25M'
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 83600,
				gdsTaxFare: 24519,
				gdsTotalFare: 108119,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 83600 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 24519
					}
				],
				internalTaxes: [],
				totalFare: 108119,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 25,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Port Harcourt-Port Harcourt Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'PHC',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T13:30:00',
								arrivalDateTime: '2019-01-19T14:30:00',
								duration: '23h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7192',
								resBookDesigCode: 'M',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Port Harcourt-Port Harcourt Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'PHC',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T09:30:00',
								arrivalDateTime: '2019-01-20T10:30:00',
								duration: '23h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7194',
								resBookDesigCode: 'L',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T11:40:00',
								arrivalDateTime: '2019-01-20T12:30:00',
								duration: '23h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'B',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-20T12:30:00',
						departureDateTime: '2019-01-19T13:30:00',
						duration: '23h:00m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 2,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '20h:10m'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:05:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '01h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7425',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T14:05:00',
						duration: '01h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 0,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: null
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 84000,
				gdsTaxFare: 24559,
				gdsTotalFare: 108559,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 84000 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 24559
					}
				],
				internalTaxes: [],
				totalFare: 108559,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 26,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T08:30:00',
								arrivalDateTime: '2019-01-19T09:40:00',
								duration: '05h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7232',
								resBookDesigCode: 'B',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T12:40:00',
								arrivalDateTime: '2019-01-19T13:30:00',
								duration: '05h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'K',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-19T13:30:00',
						departureDateTime: '2019-01-19T08:30:00',
						duration: '05h:00m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '3H:0M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T11:05:00',
								arrivalDateTime: '2019-01-26T11:35:00',
								duration: '04h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7423',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:20:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '04h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7429',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T11:05:00',
						duration: '04h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '2H:45M'
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 87400,
				gdsTaxFare: 24899,
				gdsTotalFare: 112299,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 87400 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 24899
					}
				],
				internalTaxes: [],
				totalFare: 112299,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 27,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T08:30:00',
								arrivalDateTime: '2019-01-19T09:40:00',
								duration: '05h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7232',
								resBookDesigCode: 'B',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T12:40:00',
								arrivalDateTime: '2019-01-19T13:30:00',
								duration: '05h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'K',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-19T13:30:00',
						departureDateTime: '2019-01-19T08:30:00',
						duration: '05h:00m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '3H:0M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T11:05:00',
								arrivalDateTime: '2019-01-26T11:35:00',
								duration: '21h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7423',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-27T07:00:00',
								arrivalDateTime: '2019-01-27T08:10:00',
								duration: '21h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7139',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-27T08:10:00',
						departureDateTime: '2019-01-26T11:05:00',
						duration: '21h:05m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '19H:25M'
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 87400,
				gdsTaxFare: 24899,
				gdsTotalFare: 112299,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 87400 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 24899
					}
				],
				internalTaxes: [],
				totalFare: 112299,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 28,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Owerri-Sam Mbakwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'QOW',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T14:50:00',
								arrivalDateTime: '2019-01-19T15:50:00',
								duration: '21h:40m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7108',
								resBookDesigCode: 'K',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Owerri-Sam Mbakwe Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'QOW',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T08:55:00',
								arrivalDateTime: '2019-01-20T09:55:00',
								duration: '21h:40m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7151',
								resBookDesigCode: 'L',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T11:40:00',
								arrivalDateTime: '2019-01-20T12:30:00',
								duration: '21h:40m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'B',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-20T12:30:00',
						departureDateTime: '2019-01-19T14:50:00',
						duration: '21h:40m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 2,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '18h:50m'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:05:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '01h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7425',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T14:05:00',
						duration: '01h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 0,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: null
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 87400,
				gdsTaxFare: 24899,
				gdsTotalFare: 112299,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 87400 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 24899
					}
				],
				internalTaxes: [],
				totalFare: 112299,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 29,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T16:55:00',
								arrivalDateTime: '2019-01-19T17:55:00',
								duration: '19h:35m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7156',
								resBookDesigCode: 'L',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T11:40:00',
								arrivalDateTime: '2019-01-20T12:30:00',
								duration: '19h:35m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'B',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-20T12:30:00',
						departureDateTime: '2019-01-19T16:55:00',
						duration: '19h:35m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '17H:45M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T11:05:00',
								arrivalDateTime: '2019-01-26T11:35:00',
								duration: '04h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7423',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T13:55:00',
								arrivalDateTime: '2019-01-26T15:10:00',
								duration: '04h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7233',
								resBookDesigCode: 'K',
								airEquipType: '734',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:10:00',
						departureDateTime: '2019-01-26T11:05:00',
						duration: '04h:05m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '2H:20M'
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 87400,
				gdsTaxFare: 24899,
				gdsTotalFare: 112299,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 87400 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 24899
					}
				],
				internalTaxes: [],
				totalFare: 112299,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 30,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T11:00:00',
								arrivalDateTime: '2019-01-19T12:00:00',
								duration: '25h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7122',
								resBookDesigCode: 'L',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T11:40:00',
								arrivalDateTime: '2019-01-20T12:30:00',
								duration: '25h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'B',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-20T12:30:00',
						departureDateTime: '2019-01-19T11:00:00',
						duration: '25h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '23H:40M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T11:05:00',
								arrivalDateTime: '2019-01-26T11:35:00',
								duration: '04h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7423',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T13:55:00',
								arrivalDateTime: '2019-01-26T15:10:00',
								duration: '04h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7233',
								resBookDesigCode: 'K',
								airEquipType: '734',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:10:00',
						departureDateTime: '2019-01-26T11:05:00',
						duration: '04h:05m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '2H:20M'
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 87400,
				gdsTaxFare: 24899,
				gdsTotalFare: 112299,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 87400 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 24899
					}
				],
				internalTaxes: [],
				totalFare: 112299,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 31,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T17:10:00',
								arrivalDateTime: '2019-01-19T18:25:00',
								duration: '19h:20m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7138',
								resBookDesigCode: 'K',
								airEquipType: '733',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T11:40:00',
								arrivalDateTime: '2019-01-20T12:30:00',
								duration: '19h:20m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'B',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-20T12:30:00',
						departureDateTime: '2019-01-19T17:10:00',
						duration: '19h:20m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '17H:15M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T11:05:00',
								arrivalDateTime: '2019-01-26T11:35:00',
								duration: '04h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7423',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:20:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '04h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7429',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T11:05:00',
						duration: '04h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '2H:45M'
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 87400,
				gdsTaxFare: 24899,
				gdsTotalFare: 112299,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 87400 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 24899
					}
				],
				internalTaxes: [],
				totalFare: 112299,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 32,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T17:10:00',
								arrivalDateTime: '2019-01-19T18:25:00',
								duration: '19h:20m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7138',
								resBookDesigCode: 'K',
								airEquipType: '733',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T11:40:00',
								arrivalDateTime: '2019-01-20T12:30:00',
								duration: '19h:20m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'B',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-20T12:30:00',
						departureDateTime: '2019-01-19T17:10:00',
						duration: '19h:20m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '17H:15M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T11:05:00',
								arrivalDateTime: '2019-01-26T11:35:00',
								duration: '21h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7423',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-27T07:00:00',
								arrivalDateTime: '2019-01-27T08:10:00',
								duration: '21h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7139',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-27T08:10:00',
						departureDateTime: '2019-01-26T11:05:00',
						duration: '21h:05m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '19H:25M'
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 87400,
				gdsTaxFare: 24899,
				gdsTotalFare: 112299,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 87400 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 24899
					}
				],
				internalTaxes: [],
				totalFare: 112299,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 33,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Port Harcourt-Port Harcourt Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'PHC',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T08:55:00',
								arrivalDateTime: '2019-01-19T09:55:00',
								duration: '27h:35m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7190',
								resBookDesigCode: 'K',
								airEquipType: '733',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Port Harcourt-Port Harcourt Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'PHC',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T09:30:00',
								arrivalDateTime: '2019-01-20T10:30:00',
								duration: '27h:35m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7194',
								resBookDesigCode: 'L',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T11:40:00',
								arrivalDateTime: '2019-01-20T12:30:00',
								duration: '27h:35m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'B',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-20T12:30:00',
						departureDateTime: '2019-01-19T08:55:00',
						duration: '27h:35m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 2,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '24h:45m'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:05:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '01h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7425',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T14:05:00',
						duration: '01h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 0,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: null
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 87400,
				gdsTaxFare: 24899,
				gdsTotalFare: 112299,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 87400 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 24899
					}
				],
				internalTaxes: [],
				totalFare: 112299,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 34,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Port Harcourt-Port Harcourt Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'PHC',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T13:30:00',
								arrivalDateTime: '2019-01-19T14:30:00',
								duration: '23h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7192',
								resBookDesigCode: 'M',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Port Harcourt-Port Harcourt Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'PHC',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T15:00:00',
								arrivalDateTime: '2019-01-19T16:00:00',
								duration: '23h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7194',
								resBookDesigCode: 'K',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T11:40:00',
								arrivalDateTime: '2019-01-20T12:30:00',
								duration: '23h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'B',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-20T12:30:00',
						departureDateTime: '2019-01-19T13:30:00',
						duration: '23h:00m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 2,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '20h:10m'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:05:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '01h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7425',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T14:05:00',
						duration: '01h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 0,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: null
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 87800,
				gdsTaxFare: 24939,
				gdsTotalFare: 112739,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 87800 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 24939
					}
				],
				internalTaxes: [],
				totalFare: 112739,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 35,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T08:30:00',
								arrivalDateTime: '2019-01-19T09:40:00',
								duration: '05h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7232',
								resBookDesigCode: 'B',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T12:40:00',
								arrivalDateTime: '2019-01-19T13:30:00',
								duration: '05h:00m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'K',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-19T13:30:00',
						departureDateTime: '2019-01-19T08:30:00',
						duration: '05h:00m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '3H:0M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T11:05:00',
								arrivalDateTime: '2019-01-26T11:35:00',
								duration: '04h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7423',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T13:55:00',
								arrivalDateTime: '2019-01-26T15:10:00',
								duration: '04h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7233',
								resBookDesigCode: 'K',
								airEquipType: '734',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:10:00',
						departureDateTime: '2019-01-26T11:05:00',
						duration: '04h:05m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '2H:20M'
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 91200,
				gdsTaxFare: 25279,
				gdsTotalFare: 116479,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 91200 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 25279
					}
				],
				internalTaxes: [],
				totalFare: 116479,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 36,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T17:10:00',
								arrivalDateTime: '2019-01-19T18:25:00',
								duration: '19h:20m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7138',
								resBookDesigCode: 'K',
								airEquipType: '733',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T11:40:00',
								arrivalDateTime: '2019-01-20T12:30:00',
								duration: '19h:20m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'B',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-20T12:30:00',
						departureDateTime: '2019-01-19T17:10:00',
						duration: '19h:20m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '17H:15M'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T11:05:00',
								arrivalDateTime: '2019-01-26T11:35:00',
								duration: '04h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7423',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T13:55:00',
								arrivalDateTime: '2019-01-26T15:10:00',
								duration: '04h:05m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7233',
								resBookDesigCode: 'K',
								airEquipType: '734',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:10:00',
						departureDateTime: '2019-01-26T11:05:00',
						duration: '04h:05m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 1,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '2H:20M'
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 91200,
				gdsTaxFare: 25279,
				gdsTotalFare: 116479,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 91200 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 25279
					}
				],
				internalTaxes: [],
				totalFare: 116479,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 37,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		},
		{
			airItineraryWSResponse: {
				originDestinationWSResponses: [
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								arrivalAirport:
									'Port Harcourt-Port Harcourt Intl, Nigeria',
								departureAirportCode: 'LOS',
								departureTerminal: null,
								arrivalAirportCode: 'PHC',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T08:55:00',
								arrivalDateTime: '2019-01-19T09:55:00',
								duration: '27h:35m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7190',
								resBookDesigCode: 'K',
								airEquipType: '733',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Port Harcourt-Port Harcourt Intl, Nigeria',
								arrivalAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								departureAirportCode: 'PHC',
								departureTerminal: null,
								arrivalAirportCode: 'ABV',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-19T15:00:00',
								arrivalDateTime: '2019-01-19T16:00:00',
								duration: '27h:35m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7194',
								resBookDesigCode: 'K',
								airEquipType: '737',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							},
							{
								departureAirport:
									'Abuja-Nnamdi Azikiwe Intl, Nigeria',
								arrivalAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								departureAirportCode: 'ABV',
								departureTerminal: null,
								arrivalAirportCode: 'KAN',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-20T11:40:00',
								arrivalDateTime: '2019-01-20T12:30:00',
								duration: '27h:35m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7424',
								resBookDesigCode: 'B',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Lagos-Murtala Muhammed Intl, Nigeria',
						destinationAirport:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						originAirportCode: 'LOS',
						destinationAirportCode:
							'Kano-Mallam Aminu Kano Intl, Nigeria',
						arrivalDateTime: '2019-01-20T12:30:00',
						departureDateTime: '2019-01-19T08:55:00',
						duration: '27h:35m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 2,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: '24h:45m'
					},
					{
						flightSegmentWSResponses: [
							{
								departureAirport:
									'Kano-Mallam Aminu Kano Intl, Nigeria',
								arrivalAirport:
									'Lagos-Murtala Muhammed Intl, Nigeria',
								departureAirportCode: 'KAN',
								departureTerminal: null,
								arrivalAirportCode: 'LOS',
								arrivalTerminal: null,
								airportCodeContext: null,
								departureTimeZone: null,
								arrivalTimeZone: null,
								departureDateTime: '2019-01-26T14:05:00',
								arrivalDateTime: '2019-01-26T15:35:00',
								duration: '01h:30m',
								marketingAirline: 'Aerolineas Sosa',
								marketingAirlineCode: 'P4',
								operatingAirline: null,
								operatingAirlineCode: null,
								cabin: 'Economy',
								RPH: '1',
								flightNumber: '7425',
								resBookDesigCode: 'L',
								airEquipType: '735',
								numberInParty: 1,
								eTicketEligible: true,
								mealCode: null,
								stopQuantity: 0,
								elapseTime: null,
								originDestinationType: null,
								marriageGrp: null
							}
						],
						originAirport: 'Kano-Mallam Aminu Kano Intl, Nigeria',
						destinationAirport:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						originAirportCode: 'KAN',
						destinationAirportCode:
							'Lagos-Murtala Muhammed Intl, Nigeria',
						arrivalDateTime: '2019-01-26T15:35:00',
						departureDateTime: '2019-01-26T14:05:00',
						duration: '01h:30m',
						marketingAirline: 'Aerolineas Sosa',
						marketingAirlineCode: 'P4',
						operatingAirline: null,
						operatingAirlineCode: null,
						cabin: 'Economy',
						isMultiAirline: false,
						numberOfStops: 0,
						terminal: null,
						tripCode: null,
						originAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						destinationAirportTbl: {
							state: '',
							code: '',
							airportName: '',
							city: '',
							countryName: '',
							countryCode: ''
						},
						layover: null
					}
				],
				directionIndicator: 'Circle'
			},
			pricingInfoWSResponse: {
				gdsBaseFare: 91200,
				gdsTaxFare: 25279,
				gdsTotalFare: 116479,
				gdsEquivCurrency: null,
				baseFare: { currencyCode: 'NGN', amount: 91200 },
				totalTax: [
					{
						currency: 'NGN',
						taxCode: null,
						description: null,
						amount: 25279
					}
				],
				internalTaxes: [],
				totalFare: 116479,
				currencyCode: 'NGN',
				decimalPlaces: 2,
				pricingSource: 'Published',
				priceDirection: null,
				dispenseValue: 0,
				dispenseValueAmount: 0
			},
			ticketingInfoWSResponse: {
				eTicketEligibility: '2019-01-23T18:56:33.395'
			},
			airline: 'Aerolineas Sosa',
			airlineCode: 'P4',
			direction: 0,
			cabin: null,
			cache: 38,
			supplier: 'amadeus',
			ticketPolicy: 'SITI',
			salesCategory: 'B2C',
			ticketLocale: 'Local',
			sessionId: null,
			sequenceNumber: null,
			selectedCombinationId: null
		}
	]
};
