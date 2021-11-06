package com.project.services;

import java.util.List;

import javax.websocket.server.ServerEndpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.metrics.jfr.FlightRecorderApplicationStartup;
import org.springframework.stereotype.Service;

import com.project.models.Flight;
import com.project.repository.FlightRepo;

@Service
public class FlightService {
	
	private FlightRepo fr;
	
	@Autowired
	public FlightService(FlightRepo fr) {
		this.fr = fr;
	}
	
	public Flight getFlightById(int id) {
		return fr.findById(id).get();
	}
	
	public List<Flight> getAllFlight() {
		return fr.findAll();
	}
	
	public Flight createFlight(Flight f) {
		return fr.save(f);
	}
	
	public Flight updateFlight(Flight f) {
		return fr.save(f);
	}
	
	public void deleteFlight(Flight f) {
		fr.delete(f);
	}
	
	
}
