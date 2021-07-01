const DUMMY_CITIES = ['London', 'New York', 'Mumbai'];
export const fetchWeather = () => async (dispatch) => {
	const loadedData = [];
	for (let i = 0; i < DUMMY_CITIES.length; i++) {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${DUMMY_CITIES[i]}&APPID=a053795b6d2421d0d8e760779e912b1f`
		);
		const data = await response.json();
		loadedData.push(data);
	}
	dispatch({ type: 'FETCH_WEATHER', payload: { weather: loadedData } });
};
