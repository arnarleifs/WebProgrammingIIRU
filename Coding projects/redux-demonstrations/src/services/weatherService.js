const ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather?q=Reykjavik&appid=ca8da82d2c7c78b014296d21e8d480df&units=metric';

export const getCurrentDegree = () => fetch(ENDPOINT).then(d => d.json()).then(d => d.main.temp);
