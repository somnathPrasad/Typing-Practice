import React from 'react'
import parah from "../components/RandomParah"


function RandomSentence() {
    var letters = parah.split("",150);

    return (
        <div className="parah" id="parah">
           {letters.map((letter,index)=>(<span className="letter hj" key={index}>{letter}</span>))}
        </div>
    )
}

export default RandomSentence
