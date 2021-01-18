import React,{useState} from 'react'
import car from "../images/baby-car.png"

function RaceTrack() {

    // const [letterActive, setletterActive] = useState([{
    //     letter:"",
    //     isActive:false
    // }])

 


    return (
        <div className="race-track">
            <img className="race-car" id="car" src={car} style={{left:"0"}} />
        </div>
    )
}

export default RaceTrack;
