package com.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.models.Seat;

public interface SeatRepo extends JpaRepository<Seat, Integer>{

	Seat getById(int id);
	List<Seat> findAll();
	
}