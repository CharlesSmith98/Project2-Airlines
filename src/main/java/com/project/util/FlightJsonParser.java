package com.project.util;

import java.sql.Date;
import java.sql.Time;
import java.util.LinkedHashMap;

import com.project.models.Flight;

public class FlightJsonParser {

	private static FlightJsonParser fjp;
	
	public static synchronized FlightJsonParser getFlightJsonParser() {
		if(fjp == null) {
			return new FlightJsonParser();
		}
		return fjp;
	}
	
	public Flight parse(LinkedHashMap<String, String> flightJson) {
		int id = Integer.parseInt(flightJson.get("id"));
		String name = flightJson.get("name");
		Date takeOff = new Date(Date.parse(flightJson.get("takeOff")));
		Time eta = new Time(Time.parse(flightJson.get("eta")));
		String destination = flightJson.get("destination");
		String origin = flightJson.get("origin");
		int seats = Integer.parseInt(flightJson.get("seats"));
		Flight flight = new Flight(id, name, takeOff, eta, destination, origin, seats);
		return flight;
	}
	
}
