import axios from "axios";
import React, { useEffect, useState } from "react";
import { IFlight } from "../../Interfaces/IFlight";
import { ICity } from "../../Interfaces/ICity";
import "../Flight/Book.css";

export const Book: React.FC<any> = () => {

    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const [flights, setFlights] = useState<IFlight[]>([]);
    const [cities, setCities] = useState<ICity[]>([]);



    useEffect(() => {
        axios.get('http://localhost:8080/city/get').then(response => {
            setCities(response.data);
        })
    }, []);

    const h = function (e: any) { setOrigin(e.target.value) };

    function search(event: any) {
        event.preventDefault();
        console.log(origin, destination);
        axios('http://localhost:8080/flight/get/trip?orgn=' + origin + '&dest=' + destination)
            .then(response => {
                console.log(response.data);
                setFlights(response.data);
            });
    }

    function originChange(event: any) {
        console.log(event.target.value);
        setOrigin(event.target.value)
    }

    function destChange(event: any) {
        console.log(event.target.value);
        setDestination(event.target.value)
    }

    function clickFlight(event: any) {
        // event.preventDefault();
        // alert(event.currentTarget.dataset.name);
    }

    return (
        <div className="container pt-5">
            <div className="container bg-white shadow p-3 mb-5 bg-body rounded">
                <form className="row g-3 needs-validation" noValidate>
                    <div className="col-md-6">
                        <label htmlFor="originDataList" className="form-label">Origin</label>
                        <input className="form-control" list="datalistOrigin" id="originDataList" onChange={originChange} placeholder="Type to search..." />
                        <datalist id="datalistOrigin">
                            {
                                cities.map(item => {
                                    return <option key={item.cityId} value={item.name} />
                                })
                            }
                        </datalist>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="destinationDataList" className="form-label">Destination</label>
                        <input className="form-control" list="datalistDestination" id="destinationDataList" onChange={destChange} placeholder="Type to search..." />
                        <datalist id="datalistDestination">
                            {
                                cities.map(item => {
                                    return <option key={item.cityId} value={item.name} />
                                })
                            }
                        </datalist>

                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationCustom03" className="form-label">Departure</label>
                        <input type="Date" className="form-control" id="validationCustom03" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationCustom04" className="form-label">Return</label>
                        <input type="Date" className="form-control" id="validationCustom04" required />
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>

                    <div className="col-12">
                        <button className="btn btn-primary" type="submit" onClick={search}>Search</button>
                    </div>
                </form>
            </div>
            <hr />
            <div className="container">
                {
                    sessionStorage.
                    flights.map(itm => {
                        return (
                            <div className="list-group my-1" onClick={clickFlight} data-name={itm.name}>
                            <a href="/ticket" className="list-group-item list-group-item-action active" aria-current="true">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{itm.origin.name} - {itm.destination.name}</h5>
                                    <small>Fligh name: {itm.name}</small>
                                </div>
                                <p className="mb-1">Take off at: {new Date(itm.takeoff).toUTCString()}</p>
                                <small>ETA: {new Date(itm.eta).getHours()} hours</small>
                            </a>                    
                        </div>
                        );
                    })
                }
            </div>
        </div>
    );
}