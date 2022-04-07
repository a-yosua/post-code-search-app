import React from "react"
import BingMapsReact from "bingmaps-react"

const LocationMap = ({ latitude, longitude }) => {
    return (
        <div className="pa3">
            <p>Map</p>
            <BingMapsReact
                bingMapsKey='Am_7z4gtbApdTXGGgkthehjM4Kxt_KPPrKCm3gYqpy5MquScLyyNlfos9Dsi5aHx'
                height="500px"
                mapOptions={{
                    navigationBarMode: "minified",
                }}
                width="300px"
                viewOptions={{
                    center: { 
                        latitude: parseFloat(latitude), 
                        longitude: parseFloat(longitude)
                    },
                    // center: { 
                    //     latitude: 35.683799743652344, 
                    //     longitude: 139.7539520263672 
                    // },
                    mapTypeId: "grayscale",
                    zoom: 13
                }}
                pushPins={[{
                    center: {
                        latitude: parseFloat(latitude), 
                        longitude: parseFloat(longitude)
                    }
                }]}
            />
        </div>
    )
}

export default LocationMap;