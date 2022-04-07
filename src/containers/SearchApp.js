import React from "react"
import SearchBox from "../components/SearchBox"
import DailyForecastList from "../components/DailyForecastList"
import Address from "../components/Address"
import LocationMap from "../components/LocationMap"
import SunriseInformation from "../components/SunriseInformation"
import { postcode } from "./postcode"
import { weather } from "./weather"

class SearchApp extends React.Component {
    constructor() {
        super()
        this.state = {
            searchText: '',
            postcodeData: [],
            weatherData: [],
            latitude: '',
            longitude: ''
            // postcodeData: postcode,
            // weatherData: weather.daily,
            // latitude: postcode[0].location.latitude,
            // longitude: postcode[0].location.longitude,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ searchText: event.target.value })
        // console.log(event.target.value)
    }

    handleSubmit(event) {
        fetch(`https://apis.postcode-jp.com/api/v5/postcodes/${this.state.searchText}?fields=pref,city,town,postcode,allAddress,location`)
            .then(response => response.json())
            .then(postcode => {
                this.setState({
                    postcodeData: postcode,
                    latitude: postcode[0].location.latitude,
                    longitude: postcode[0].location.longitude
                })
                console.log(postcode)
                const lat = postcode[0].location.latitude
                const lon = postcode[0].location.longitude
                const units = 'metric'
                const url = 'https://api.openweathermap.org/data/2.5/onecall'
                const appid = '5ecf1c8289825b1db416fde1d4b4b456'
                const exclude = 'current,minutely,hourly,alerts'
                return fetch(`${url}?lat=${lat}&lon=${lon}&exclude=${exclude}&exclude=${exclude}&units=${units}&appid=${appid}`)
            })
            .then(response => response.json())
            .then(weather => {
                // const dt = new Date(weather.daily[0].dt * 1000)
                // console.log(dt.toDateString())
                this.setState({ weatherData: weather.daily })
            })
            .catch(error => {
                this.setState({
                    postcodeData: [],
                    weatherData: [],
                    latitude: '',
                    longitude: ''
                })
                console.log(error)
            })

        // Update the state using JSON
        // this.setState({
        //     postcodeData: postcode,
        //     weatherData: weather.daily
        // })
        // console.log(postcode[0])

        event.preventDefault()
    }

    render() {
        if (this.state.postcodeData.length === 0) {
            return (
                <section className="mw5 mw7-ns center bg-light-gray pa3 ph4-ns">
                    <div className="">
                        <SearchBox handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                    </div>
                </section>
            )
        } else {
            return (
                <section className="mw5 mw7-ns center bg-light-gray pa3 ph4-ns">
                    <div className="">
                        <SearchBox handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                        <Address address={this.state.postcodeData} />
                        <DailyForecastList dailyForecast={this.state.weatherData} />
                        <div className="cf">
                            <div className="fl w-50">
                                <LocationMap latitude={this.state.latitude} longitude={this.state.longitude} />
                            </div>
                            <div className="fl w-50">
                                <SunriseInformation dailyForecast={this.state.weatherData} />
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}

export default SearchApp