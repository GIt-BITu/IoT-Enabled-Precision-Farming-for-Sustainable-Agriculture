import React, {useState, useEffect} from "react";
import { format } from 'date-fns';
import { RingLoader } from "react-spinners";


function Weather(){

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const API_KEY = "b7d6350d41a955bc976503c3fa149317";

    useEffect( () => {
        const fetchWeather = async () => {
            if (!navigator.geolocation) {
                setError("Geolocation is not supported on your browser");
                setLoading(false);
                return;
            }

            navigator.geolocation.getCurrentPosition(async (currentPosition) => {
                try {
                    const { latitude, longitude } = currentPosition.coords;
                    const response = await fetch(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
                    );

                    const data = await response.json();

                    setWeather({
                        temperature: Math.floor(data.main.temp),
                        description: data.weather[0].description,
                        humidity: data.main.humidity,
                        windSpeed: data.wind.speed,
                        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                        cloudCover: data.clouds.all,
                        date: format(new Date(), "do MMMM yyyy"),
                        day: format(new Date(), "EEEE"),
                        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
                        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
                        visibility: data.visibility / 1000
                    });

                } catch (err) {
                    setError("Something went wrong, please check your connectivity");
                    console.log(err);
                } finally {
                    setLoading(false);
                }
            }, () => {
                setError("Please activate your location to see the weather");
                setLoading(false);
            });
        };

        fetchWeather().catch(console.error);

        const intervalId = setInterval(() => {
            fetchWeather().catch(console.error);
        }, 600000);

        return () => clearInterval(intervalId);
    }, [])

    const errorMessage = () => {
        switch(error){
            case "Please activate your location to see the weather":
                return <img className="w-[520px] mx-auto" src="/src/assets/locationOff.jpg" alt="error"/>;
            case "Something went wrong, please check your connectivity":
                return <img className="w-[520px] mx-auto" src="/src/assets/internetOff.jpg" alt="error"/>;
            case "Geolocation is not supported on your browser":
                return <p className="mx-auto text-center text-white bg-red-600 p-2 rounded-md font-semibold">{error}</p>;

            default:
                return <p className="mx-auto text-center text-white bg-red-600 p-2 rounded-md font-semibold">{error}</p>;
        }

    }

    const changePic = () => {
        const desc = weather?.description?.toLowerCase();
        switch(desc){
            //Clouds
            case "broken clouds":
            case "few clouds":
            case "scattered clouds":
            case "overcast clouds":
                return '/src/assets/cloudy.png';
            //Rain
            case "light rain":
            case "moderate rain":
            case "heavy intensity rain":
            case "very heavy rain":
            case "extreme rain":
            case "freezing rain":
            case "light intensity shower rain":
            case "shower rain":
            case "heavy intensity shower rain":
            case "ragged shower rain":
                return '/src/assets/rainy.png';
            //Snow
            case "snow":
            case "light snow":
            case "heavy snow":
            case "sleet":
            case "light shower sleet":
            case "shower sleet":
            case "light rain and snow":
            case "rain and snow":
            case "light shower snow":
            case "shower snow":
            case "heavy shower snow":
                return '/src/assets/snow.png';
            //Thunderstorm
            case "thunderstorm":
            case "thunderstorm with light rain":
            case "thunderstorm with rain":
            case "thunderstorm with heavy rain":
            case "light thunderstorm":
            case "heavy thunderstorm":
            case "ragged thunderstorm":
            case "thunderstorm with light drizzle":
            case "thunderstorm with drizzle":
            case "thunderstorm with heavy drizzle":
                return '/src/assets/thunder.png';
            //Sunny
            case "clear sky":
                return '/src/assets/sunny.png';
            //Drizzle
            case "light intensity drizzle":
            case "drizzle":
            case "heavy intensity drizzle":
            case "light intensity drizzle rain":
            case "drizzle rain":
            case "heavy intensity drizzle rain":
            case "shower rain and drizzle":
            case "heavy shower rain and drizzle":
            case "shower drizzle":
                return "/sec/assets/drizzle.png";
            //Atmosphere
            case "mist":
            case "smoke":
            case "haze":
            case "sand/dust whirls":
            case "fog":
            case "sand":
            case "dust":
            case "volcanic ash":
            case "squalls":
            case "tornado":
                return "/src/assets/atmosphere.png";

            default:
                return '/';
        }
    }

    return (
        <>
            <div className="flex justify-between items-center">
                    {loading && <div className="mx-auto">
                        <RingLoader color="#152a1b" size="50"/>
                    </div>}
                    {error && errorMessage()}
                {weather && (
                    <div className=" flex bg-white gap-5 p-5 shadow w-[76%] rounded-md">
                        {/*side part*/}
                        <div className="w-64 flex flex-col items-center p-3 rounded-md">
                            <div className="flex flex-col gap-5 mb-2">
                                <div>
                                    <span className="font-semibold text-5xl relative">{weather.temperature}°<b className="absolute text-[34px]">C</b></span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h1 className="font-semibold text-xl">{weather.day}</h1>
                                    <span className="text-gray-400">{weather.date}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-1">
                                <img className="w-14" src={weather.icon} alt="icon"/>
                                <span className="font-semibold text-lg">{weather.description}</span>
                            </div>
                            <div className="overflow-hidden rounded-md w-56 h-24 bg-cover bg-center">
                                <img src="/src/assets/weatimg.jpg" alt="img"/>
                            </div>
                        </div>

                        {/*main part*/}
                        <div className=" bg-[#f3f8f8] grid grid-cols-3 p-10 gap-5 rounded-md">
                            {[
                                {
                                    title: "Wind Status",
                                    cond: `${weather.windSpeed}m/s`,
                                    icon: "/src/assets/wind.png"
                                },
                                {
                                    title: "Humidity",
                                    cond: `${weather.humidity}%`,
                                    icon: "/src/assets/humidity.png"
                                },
                                {
                                    title: "Cloud Cover",
                                    cond: `${weather.cloudCover}%`,
                                    icon: "/src/assets/clouds.png"
                                },
                                {
                                    title: "Visibility",
                                    cond: `${weather.visibility}km`,
                                    icon: "/src/assets/weatherVisibility.png"
                                },
                                {
                                    title: "Sunrise",
                                    cond: weather.sunrise,
                                    icon: "/src/assets/sunrise.png"
                                },
                                {
                                    title: "Sunset",
                                    cond: weather.sunset,
                                    icon: "/src/assets/sunset.png"
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-md p-4 w-40 shadow">
                                    <div className="mb-3">
                                        <h1 className="text-gray-400">{item.title}</h1>
                                    </div>
                                    <div className="flex items-center justify-center gap-5">
                                        <span className="font-black text-xl">{item.cond}</span>
                                        <img className="w-8" src={item.icon} alt="icon"/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div className="bg-center bg-cover w-64 h-[363px] rounded-md"
                    style={{backgroundImage: `url(${changePic()})`}}
                >
                </div>
            </div>
        </>
    )
}

export default Weather;