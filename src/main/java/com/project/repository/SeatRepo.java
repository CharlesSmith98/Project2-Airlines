package com.project.repository;

import java.util.List;

import com.project.models.Seat;

public interface SeatRepo {

	Seat selectById(int id);
	List<Seat> selectAll();
	void create(Seat s);
	
}