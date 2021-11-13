// @ts-ignore
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ISeat } from '../Interfaces/ISeat';
import { IFlight } from '../Interfaces/IFlight';

export const Seat: React.FC<IFlight> = (flight:IFlight) => {

    let [seats, setSeats] = useState<ISeat[]>([]);

    const {flightId} = flight;

    
    // let res = await axios.get('http://localhost:8080/seat/get/flight/seats?id=' + flightId);
    //     console.log(res.data);

      //  setSeats(res.data.results.map(obj: => {obj.seatId, obj.seatAvailable}));


        return(
         <div>Seats</div>
        );
    }
