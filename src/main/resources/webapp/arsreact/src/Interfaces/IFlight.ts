export interface IFlight{
    id: number,
    name: string,
    takeoff: Date,
    eta: Date,
    destination: string,
    origin: string,
    seats: number;
}