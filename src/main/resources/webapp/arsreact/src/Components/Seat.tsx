// @ts-ignore
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ISeat } from '../Interfaces/ISeat';

export const Seat: React.FC<ISeat> = (seat:ISeat) => {

    const [seats, setSeats] = useState<ISeat[]>([]);

    return(
        <div></div>
    );

}