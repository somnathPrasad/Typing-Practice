import React,{useEffect} from "react";
import "./styles.css";
import RaceTrack from "./components/RaceTrack"
import RandomSentence from "./components/RandomSentence"
// import axios from './axios'

export default function App() {

  // useEffect(() => {
  //   async function fetchData(){
  //     const req = await axios.get("/gameState");
  //     console.log(req);
  //   }
  //   fetchData();
  // }, [])

  return (
    <div className="App">
    <RaceTrack />
    <RandomSentence />
    </div>
  );
}
