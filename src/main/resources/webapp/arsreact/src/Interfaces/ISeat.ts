
import { IFlight } from "./IFlight";

export interface ISeat {
<<<<<<< HEAD
<<<<<<< HEAD
    seatId: number;
    seatAvailable: boolean;
    flight: IFlight;
=======
=======

>>>>>>> 8ba49487ce894d633520a468f5d98e741c8776f3
    seatId: number,
    flight: IFlight,
    available: boolean
>>>>>>> master
}