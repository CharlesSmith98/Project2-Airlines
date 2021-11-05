package com.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.models.Ticket;
import com.project.services.TicketService;

@RestController
@RequestMapping(value="/tickets")
public class TicketController {

	private TicketService tService;

	@Autowired
	public TicketController(TicketService tService) {
		super();
		this.tService = tService;
	}
	
	@GetMapping(value="/")
	public List<Ticket> getAllTickets() {
		System.out.println("In Get All Tickets");
		return tService.getAllTickets();
	}
	
}
