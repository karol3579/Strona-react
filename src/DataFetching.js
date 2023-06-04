import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching(param) {
    const baseURL = "https://api.open-meteo.com/v1/forecast?current_weather=true"
    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get(baseURL+'&latitude='+param.latitude+'&longitude='+param.longitude).then((response) => {
          setPost(response.data.current_weather);
        });
      }, []);

  return (
    <div className="app" >
        <h3>Temperatura: {post.temperature} c</h3>
        <h3>Prędkość wiatru: {post.windspeed}</h3>
    </div>
  )
}


export default DataFetching