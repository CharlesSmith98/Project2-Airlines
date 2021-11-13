import { IFlight } from "./IFlight";

import { IFlight } from "./IFlight";

export interface ISeat {
<<<<<<< HEAD
    seatId: number;
    seatAvailable: boolean;
    flight: IFlight;
=======
    seatId: number,
    flight: IFlight,
    available: boolean
>>>>>>> master
}