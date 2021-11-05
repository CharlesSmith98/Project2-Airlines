package com.project.repository;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.project.models.Seat;

public class SeatRepoDao {

	@Autowired
	private SessionFactory sf;
	
	public SeatRepoDao(SessionFactory sf) {
		this.sf = sf;
	}
	
	public Seat selectById(int id) {
		return sf.getCurrentSession().get(Seat.class, id);
	}
	
	@Transactional
	public List<Seat> selectAll() {
		return sf.getCurrentSession().createQuery("from Seat", Seat.class).list();
	}

	public void create(Seat s) {
		sf.getCurrentSession().save(s);		
	}
	
}