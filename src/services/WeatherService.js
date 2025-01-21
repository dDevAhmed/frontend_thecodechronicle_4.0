import { useQuery } from '@tanstack/react-query';

const fetchWeather = async () => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=kaduna&aqi=no`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; // Return the weather data  
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw new Error("Failed to fetch weather data");
    }
};

const fetchSunTimes = async () => {
    const latitude = 10.52; // todo - Consider using user's current location  
    const longitude = 7.44;
    const url = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.results; // Return the sunrise/sunset times  
    } catch (error) {
        console.error('Error fetching sunrise and sunset data:', error);
        throw new Error("Failed to fetch sunrise and sunset data");
    }
};

export const useWeather = () => {  
    return useQuery({  
        queryKey: ['weather'],
        queryFn: fetchWeather,  
    });  
};  

export const useSunTimes = () => {  
    return useQuery({  
        queryKey: ['suntimes'], 
        queryFn: fetchSunTimes,  
    });  
}; 
