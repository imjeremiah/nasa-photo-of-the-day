import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Picture from "./Picture";

export const API_KEY = 'NCDBedJV8DQccngJXfeJeh7vElLqGISjEofkDvtK';
export const URL = 'https://api.nasa.gov/planetary';

function App() {
  const [photo, setPhoto] = useState(null);
  const [date, setDate] =useState(null);
  const [credit, setCredit] = useState(null);
  const [title, setTitle] = useState(null);
  const [story, setStory] = useState(null);

  useEffect(() => {
    const fetchPhoto = () => {
      axios.get(`${URL}/apod?api_key=${API_KEY}`)
        .then((res) => {
          console.log(res.data);
          setPhoto(res.data.hdurl)
          setDate(res.data.date)
          setCredit(res.data.copyright)
          setTitle(res.data.title)
          setStory(res.data.explanation)
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
      <Picture photo={photo} date={date} credit={credit} title={title} story={story}/>
    </div>
  )
}

export default App;
