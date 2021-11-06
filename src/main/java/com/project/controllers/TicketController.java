package com.project.controllers;

import java.util.LinkedHashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.models.Ticket;
import com.project.models.User;
import com.project.services.TicketService;
import com.project.util.UserJsonParser;

@RestController
@RequestMapping(value="/tickets")
public class TicketController {

	private UserJsonParser ujp;
	private TicketService tService;

	@Autowired
	public TicketController(TicketService tService) {
		super();
		this.tService = tService;
		this.ujp = UserJsonParser.getUserJsonParser();
	}
	
	@GetMapping(value="/")
	public List<Ticket> getAllTickets() {
		System.out.println("In Get All Tickets");
		return tService.getAllTickets();
	}
	
	@GetMapping(value="/get/user")
	public List<Ticket> getTicketsByUser(@RequestBody LinkedHashMap<String, String> userJson) {
		User user = ujp.parse(userJson);
		return tService.getTicketsByUser(user);
	}
	
}
