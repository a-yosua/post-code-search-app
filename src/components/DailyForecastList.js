import React from "react"

const DailyForecastList = ({ dailyForecast }) => {
    const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
        <div className="tc">
            <p className="tl">3-day forecast</p>
            {
                dailyForecast.slice(0, 3).map(data => {
                    const date = new Date(data.dt * 1000)
                    return (
                        <div key={data.dt} className='tc bg-washed-yellow dib br3 pa2 ma2 grow bw2'>
                            <img
                                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                            />
                            <p>{date.toISOString().split('T')[0]} {weekday[date.getDay()]}</p>
                            <p className="f2">{data.weather[0].main}</p>
                            <p>Max: {data.temp.max}&#176;C Min: {data.temp.min}&#176;C</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DailyForecastList;