import { IFlight } from "./IFlight";

export interface Seat {
    id: number,
    flight: IFlight,
    available: boolean
}