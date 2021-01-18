import React from "react";
import "./styles.css";
import RaceTrack from "./components/RaceTrack"
import RandomSentence from "./components/RandomSentence"

export default function App() {
  return (
    <div className="App">
    <RaceTrack />
    <RandomSentence />
    </div>
  );
}
