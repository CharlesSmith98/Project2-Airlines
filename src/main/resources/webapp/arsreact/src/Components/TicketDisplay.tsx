/*
 * Action TBD: Will need to change this view, if the Ticket Interface is
 * changed to provide more detailed information to the user.
 * 
 */

import { useEffect, useState } from "react";
import { ITicket } from "../Interfaces/ITicket";

export const TicketDisplay: React.FC<ITicket>= (ticket:ITicket) => {
    
    const {id, flight, seat, user} = ticket;
    
    let [ticketId, setTicketId] = useState(id);
    let [ticketFlight, setTicketFlight] = useState(flight);
    let [ticketSeat, setTicketSeat] = useState(seat);
    let [ticketUser, setTicketUser] = useState(user);

    useEffect(() => {
        setTicketId(ticketId);
        setTicketFlight(ticketFlight)
        setTicketSeat(ticketSeat);
        setTicketUser(ticketUser);
    }, [ticketId])

    return(
        <div>
            <form>
                <fieldset>
                    <legend>Ticket</legend>
                    <label htmlFor="ticketNum">Ticket Number: </label>
                    <input type="text" name="ticketNum" readOnly value={ticketId}/>
                    <label htmlFor="flightName">Flight: </label>
                    <input type="text" name="flightName" readOnly value={ticketFlight.name}/>
                    <label htmlFor="seatNum">Seat Number: </label>
                    <input type="text" name="seatNum" readOnly value={ticketSeat.id}/>
                    <label htmlFor="userNum">Passenger: </label>
                    <input type="text" name="userNum" readOnly value={`${ticketUser.firstname} ${ticketUser.lastname}`}/>
                </fieldset>
            </form>
        </div>
    );
}