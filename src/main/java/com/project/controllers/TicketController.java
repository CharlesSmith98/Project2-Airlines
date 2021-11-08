package com.project.controllers;

import java.util.LinkedHashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.models.Flight;
import com.project.models.Seat;
import com.project.models.Ticket;
import com.project.models.User;
import com.project.services.FlightService;
import com.project.services.TicketService;
import com.project.services.UserService;
import com.project.util.FlightJsonParser;
import com.project.util.SeatJsonParser;
import com.project.util.TicketJsonParser;
import com.project.util.UserJsonParser;

@RestController
@RequestMapping(value="/tickets")
public class TicketController {

	private UserJsonParser ujp;
	private SeatJsonParser sjp;
	private FlightJsonParser fjp;
	private TicketJsonParser tjp;
	private TicketService tService;

	@Autowired
	public TicketController(TicketService tService) {
		super();
		this.tService = tService;
		this.tjp = TicketJsonParser.geTicketJsonParser();
		this.fjp = FlightJsonParser.getFlightJsonParser();
		this.sjp = SeatJsonParser.getSeatJsonParser();
		this.ujp = UserJsonParser.getUserJsonParser();
	}
	
	@PostMapping(value="/create")
	public Ticket createTicket(@RequestBody LinkedHashMap<String, Object> ticketJson) {
		System.out.println(ticketJson);
		Ticket t = tjp.parse(ticketJson);
		return tService.createTicket(t);
	}
	
	@GetMapping(value="/")
	public List<Ticket> getAllTickets() {
		System.out.println("In Get All Tickets");
		return tService.getAllTickets();
	}
	
	@GetMapping(value="/get/user")
	public List<Ticket> getTicketsByUser(@RequestBody LinkedHashMap<String, Object> userJson) {
		User user = ujp.parse(userJson);
		return tService.getTicketsByUser(user);
	}
	
	@GetMapping(value="/get/flight")
	public List<Ticket> getTicketsByFlight(@RequestBody LinkedHashMap<String, Object> flightJson) {
		Flight flight = fjp.parse(flightJson);
		return tService.getTicketsByFlight(flight);
	}
	
	@PostMapping(value="/update")
	public Ticket updateTicket(@RequestBody LinkedHashMap<String, Object> ticketJson) {
		Ticket t = tjp.parse(ticketJson);
		return tService.updateTicket(t);
	}
	
}
