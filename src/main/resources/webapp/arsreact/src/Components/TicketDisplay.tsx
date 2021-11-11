/*
 * Action TBD: Will need to change this view, if the Ticket Interface is
 * changed to provide more detailed information to the user.
 * 
 */

import { useEffect, useState } from "react";
import { ITicket } from "../Interfaces/ITicket";

export const TicketDisplay: React.FC<ITicket>= (ticket:ITicket) => {
    
    const {ticketId, flightId, seatId, userId} = ticket;
    
    let [ticketNum, setTicketId] = useState(0);
    let [flightNum, setFlightId] = useState(0);
    let [seatNum, setSeatId] = useState(0);
    let [userNum, setUserId] = useState(0);

    useEffect(() => {
        setTicketId(ticketId);
        setFlightId(flightId);
        setSeatId(seatId);
        setUserId(userId);
    }, [ticketNum])

    return(
        <div>
            <form>
                <fieldset>
                    <legend>Ticket</legend>
                    <label htmlFor="tVal">Ticket Number: </label>
                    <input type="text" name="tVal" readOnly value={ticketNum}/>
                    <label htmlFor="fVal">Flight Number: </label>
                    <input type="text" name="fVal" readOnly value={flightNum}/>
                    <label htmlFor="sVal">Seat Number: </label>
                    <input type="text" name="sVal" readOnly value={seatNum}/>
                    <label htmlFor="uVal">Passenger ID: </label>
                    <input type="text" name="uVal" readOnly value={userNum}/>
                </fieldset>
            </form>
        </div>
    );
}