import axios from "axios";
import React, { useEffect, useState } from "react";
import { Flight } from "../../interfaces";
import "../Flight/Book.css";

export const Book: React.FC<any> = () => {

    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    
    const [flight, setFlight] = useState<Flight[]>([]);

    useEffect(() => {
        axios.get('https://my.api.mockaroo.com/flight.json?key=05adc8f0').then(response => {
            // console.log(response.data);
            setFlight(response.data);
        })
    }, []);

    const h = function(e: any) {setOrigin(e.target.value)};

    return (
        <div className="container pt-5">
            <div className="container bg-white shadow p-3 mb-5 bg-body rounded">
                <form className="row g-3 needs-validation" noValidate>
                    <div className="col-md-6">
                        <label htmlFor="originDataList" className="form-label">Origin</label>
                        <input className="form-control" list="datalistOrigin" id="originDataList" placeholder="Type to search..."/>
                            <datalist id="datalistOrigin">
                                {
                                    flight.map(item => {
                                        return <option key={item.id} value={item.origin}/>
                                    })
                                }
                            </datalist>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                    </div>
                    <div className="col-md-6">
                    <label htmlFor="destinationDataList" className="form-label">Destination</label>
                        <input className="form-control" list="datalistDestination" id="destinationDataList" placeholder="Type to search..."/>
                            <datalist id="datalistDestination">
                                {
                                    flight.map(item => {
                                        return <option key={item.id} value={item.destination}/>
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
                        <button className="btn btn-primary" type="submit">Search</button>
                    </div>
                </form>
            </div>
        </div>
    );
}