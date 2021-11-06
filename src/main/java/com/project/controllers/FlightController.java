package com.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.models.Flight;
import com.project.repository.FlightRepo;
import com.project.services.FlightService;

@RestController
@RequestMapping("/flight")
//@CrossOrigin(origins = "*")
public class FlightController {
	
	private FlightService fs;
	
	@Autowired
	public FlightController(FlightService fs) {
		this.fs = fs;
	}
	
//	@GetMapping("/")
	public void showMessage() {
		System.out.println("From Flight Controller.");
	}
	
	@GetMapping(value="/get/{id}")
	public Flight getByFlightId(@PathVariable("id") int id) {		
		return fs.getFlightById(id);		
	}
	
	@GetMapping(value="/get")
	public List<Flight> getAllFlights() {
		System.out.println("From get all flights");
		return fs.getAllFlight();
	}
	
	@PostMapping(value="/create")
	public Flight createFlight(@RequestBody Flight f) {
		System.out.println("From Post Flight Controller "+f);
		return fs.createFlight(f);
	}
	
	@PostMapping(value="/update")
	public Flight updateFlight(@RequestBody Flight f) {
		return fs.updateFlight(f);
	}
	
	@PostMapping(value="/delete")
	public void deleteFlight(@RequestBody Flight f) {
		fs.deleteFlight(f);
	}
	

}
