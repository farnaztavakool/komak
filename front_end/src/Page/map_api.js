import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios'
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

function SimpleMap() {
    const [results, setResults] = useState([]);
    const [latest, setLatest] = useState([])

    useEffect(() => {
        axios.all ([
            axios.get("https://corona.lmao.ninja/v2/countries?sort=country"),
            axios.get("https://corona.lmao.ninja/v2/all")
        ])
        .then((res) => {
            setResults(res[0].data)
            setLatest(res[1].data)
            console.log(results[0].cases)
            // console.log(latest)
        })
        .catch((err)=> console.log(err))
    })
    const date = new Date(parseInt(latest.updated))
    const lastUpdated = date.toString()

    const countriesLocation = results.map((data,i) => {
        return (
            <div
                lat={data.countryInfo.lat}
                lng = {data.countryInfo.long}
                style= {{
                    color:"red",
                    backgroundColor: "#FFF",
                    height:"25px",
                    width: "35px"
                }}
            >
                {data.cases}
            </div>

        )});
 

// class SimpleMap extends Component {
  
     
    return (
      // Important! Always set the container height explicitly
      <div style={{ marginTop :'10vh' ,height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAZIx_lH_fGBrkHRAH3KvtUc4vy40x6dPw"}}
          defaultCenter={{lat: 59.95,lng: 30.33}}
          defaultZoom={4}
        >
          {countriesLocation}
        </GoogleMapReact>
      </div>
    );
  }


export default SimpleMap;