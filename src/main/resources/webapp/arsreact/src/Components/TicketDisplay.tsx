/*
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
<<<<<<< HEAD
        <div>
            <form>
                <fieldset>
                    <legend>Ticket</legend>
                    <label htmlFor="ticketNum">Ticket Number: </label>
                    <input type="text" name="ticketNum" readOnly value={ticketId}/>
                    <label htmlFor="flightName">Flight: </label>
                    <input type="text" name="flightName" readOnly value={ticketFlight.name}/>
                    <label htmlFor="seatNum">Seat Number: </label>
                    <input type="text" name="seatNum" readOnly value={ticketSeat.seatId}/>
                    <label htmlFor="userNum">Passenger: </label>
                    <input type="text" name="userNum" readOnly value={`${ticketUser.firstName} ${ticketUser.lastName}`}/>
                </fieldset>
            </form>
=======
        <div className="container pt-5">
            <div className="container bg-white shadow p-3 mb-5 bg-body rounded">
                <form className="needs-validation" noValidate>
                    <fieldset>
                        <legend>Ticket</legend>
                        <div>
                            <label htmlFor="ticketNum">Ticket Number: </label><br />
                            <input type="text" name="ticketNum" readOnly value={ticketId}/>
                        </div>
                        <label htmlFor="flightName">Flight Name:</label><br />
                        <input type="text" name="flightName" readOnly value={ticketFlight.name}/><br />
                        <label htmlFor="origin">From:&nbsp;</label>
                        <input type="text" name="origin" readOnly value={ticketFlight.origin}/><br />
                        <label htmlFor="destination">To:&nbsp;</label>
                        <input type="text" name="destination" readOnly value={ticketFlight.destination}/>
                        <div className="col-md-6">
                            <label htmlFor="seatNum">Seat Number: </label><br />
                            <input type="text" name="seatNum" readOnly value={ticketSeat.seatId}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="userNum">Passenger: </label><br />
                            <input type="text" name="userNum" readOnly value={`${ticketUser.firstname} ${ticketUser.lastname}`}/>
                        </div>
                    </fieldset>
                </form>
            </div>
>>>>>>> master
        </div>
    );
}