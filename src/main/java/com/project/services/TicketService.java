package com.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.models.Ticket;
import com.project.models.User;
import com.project.repository.TicketRepo;

@Service
public class TicketService {

	private TicketRepo tDao;
	
	@Autowired
	public TicketService(TicketRepo tDao) {
		this.tDao = tDao;
	}
	
	
	public Ticket createTicket(Ticket t) {
		try {
			tDao.save(t);
			return t;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	public List<Ticket> getAllTickets() {
		try {
			List<Ticket> tickets = tDao.findAll();
			return tickets;
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	public List<Ticket> getTicketsByUser(User user) {
		try {
			List<Ticket> userTickets = tDao.findAllByUser(user);
			return userTickets;
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	
}
