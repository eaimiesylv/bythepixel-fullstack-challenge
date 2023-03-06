export const ALL_USERS_URL = 'http://localhost/';



export const getUserWeatherUrl = (lat, lon) => {
    const appId = 'c4b8deb1cf03d2f44edac9759de75ee0';
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
    };