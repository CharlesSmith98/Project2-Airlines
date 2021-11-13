// @ts-ignore
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ISeat } from '../../Interfaces/ISeat';
import { IFlight } from '../../Interfaces/IFlight';
import "../Seat/Seat.css";


  function updateSeat(event:any) {
    event.preventDefault();

    if(event.currentTarget.dataset.available === "false"){
      alert("This seat is already taken");
    }else{
      update(event.currentTarget.dataset.seatId);
    }

  }

  async function update(id: number){

    let req = await axios.get('http://localhost:8080/seat/get/seat?id='+id);
    
    let res = await axios.post('http://localhost:8080/seat/update', req);

  }



 export const SeatDisplay: React.FC<IFlight> = (flight:IFlight) => {

    let [seats, setSeats] = useState<ISeat[]>([]);

    const {id} = flight;

    async function getData(){
      let res = await axios.get('http://localhost:8080/seat/get/flight/seats?id=' + id);
      console.log(res.data);
      setSeats(res.data);
    }

    getData();
  

     const halfWayIndex = Math.ceil(seats.length / 2);

     const firstSeat= seats.slice(0, halfWayIndex);
     const secondSeat = seats.slice(halfWayIndex);

        return(
         
          <>
          {firstSeat.map(({ seatId, seatAvailable }) => (
              <button onClick= {updateSeat} className = "seat1" data-available={seatAvailable} data-id={seatId}>
                
                {seatId} 

                </button>
          ))}
          
        <div className = "second">
           {secondSeat.map(({ seatId, seatAvailable }) => (
            
            <button onClick= {updateSeat} className = "seat2" data-available={seatAvailable} data-id={seatId}>
              {seatId}
              </button>
        ))}
        </div>
        </>

        );
    }

