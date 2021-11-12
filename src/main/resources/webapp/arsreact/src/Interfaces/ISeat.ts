import { IFlight } from "./IFlight";

export interface ISeat {
    seatId: number,
    flight: IFlight,
    available: boolean
}