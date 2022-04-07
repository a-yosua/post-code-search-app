import React from "react";

const SunriseInformation = ({ dailyForecast }) => {
    const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
        <div className="pa3">
            <p className="">Sunrise/Sunset</p>
            {
                dailyForecast.slice(0, 1).map(data => {
                    const date = new Date(data.dt * 1000)
                    const sunrise = new Date(data.sunrise * 1000)
                    const sunset = new Date(data.sunset * 1000)
                    return (
                        <div key={data.dt} className="tc bg-washed-yellow br3 pa2 grow bw2">
                            <p className="">{date.toISOString().split('T')[0]} {weekday[date.getDay()]}</p>
                            <p className="f3">Rise: {sunrise.toLocaleTimeString()}</p>
                            <p className="f3">Set: {sunset.toLocaleTimeString()}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SunriseInformation;