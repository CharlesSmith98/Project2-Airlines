import { IFlight } from "./IFlight";
import { IUser } from "./IUser";

// Action TBD: Adjust fields for Readibility
export interface ITicket {
    ticketId: number;
    flight: IFlight;
    seatId: number;
    user: IUser;
}