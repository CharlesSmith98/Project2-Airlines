package com.project.controllers;

import java.util.LinkedHashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.models.Seat;
import com.project.services.SeatService;


@RestController
@RequestMapping(value="/seat")

public class SeatController {

	private SeatService sServ;
	@Autowired 
	
	public SeatController(SeatService s) {
		this.sServ = s;
	}

	@GetMapping(value="/get")
	public List<Seat> getAll(){
		System.out.println("In the /get method");
		return sServ.getAllSeats();
	}
	
	@PostMapping(value="/create")
	public Seat createSeat(@RequestBody Seat s) {
		System.out.println(s);
		
//		int id = Integer.parseInt(s.get("id"));
//		int flightId = Integer.parseInt(s.get("flight"));
//		Boolean available = Boolean.parseBoolean(s.get("availableSeat"));
//		//make flight get by id
//		Seat s = new Seat();
		return sServ.createSeat(s);
	}
	
}
