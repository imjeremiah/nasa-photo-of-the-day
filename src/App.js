import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Picture from "./Picture";

export const API_KEY = 'NCDBedJV8DQccngJXfeJeh7vElLqGISjEofkDvtK';
export const URL = 'https://api.nasa.gov/planetary';

function App() {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const fetchPhoto = () => {
      axios.get(`${URL}/apod?api_key=${API_KEY}&date=2012-03-14`)
        .then((res) => {
          setPhoto(res.data.hdurl)
        })
        .catch((err) => {
          console.log("err", err)
        })
    }
    fetchPhoto()
  }, [])

  return (
    <div className="App">
      <h1><span role="img" aria-label='go!'>🚀</span> NASA's Astronomy Picture of the Day <span role="img" aria-label='go!'>🚀</span>
      </h1>
      <Picture photo={photo}/>
    </div>
  )
}

export default App;
