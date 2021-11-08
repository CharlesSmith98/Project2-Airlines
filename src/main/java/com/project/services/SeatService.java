package com.project.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.models.Seat;
import com.project.repository.SeatRepo;

@Service
public class SeatService {

	private SeatRepo sDao;
	
	@Autowired
	public SeatService(SeatRepo sd) {
		this.sDao = sd;
	}

	public Seat getSeatById(int id) {
		try {
		return sDao.getById(id);
		}catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	public Seat createSeat(Seat s) {
		try {
			sDao.save(s);
			return s;
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	public List<Seat> getAllSeats(){
		try {
			return sDao.findAll();
		} catch(Exception e) {
			return new ArrayList<Seat>();
		}
	}
	
	public void deleteSeat(Seat s) {
		sDao.delete(s);
	}
	
	public Seat updateSeat(Seat s) {
		return sDao.save(s);
	}
	
}
