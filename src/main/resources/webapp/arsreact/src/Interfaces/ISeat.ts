
import { IFlight } from "./IFlight";

export interface ISeat {
    seatId: number;
    seatAvailable: boolean;
    flight: IFlight;
}