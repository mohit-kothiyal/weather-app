const initState = {
	weather: [],
};

const weatherReducer = (state = initState, action) => {
	switch (action.type) {
		case 'FETCH_WEATHER':
			return { ...state, weather: action.payload.weather };
		default:
			return { ...state };
	}
};
export default weatherReducer;
