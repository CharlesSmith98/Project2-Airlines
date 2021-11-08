package com.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.models.Flight;

@Repository
public interface FlightRepo extends JpaRepository<Flight, Integer> {
//	void create(Flight f);
//	Flight selectById(int id);
//	List<Flight> selectAll();
//	Flight selectByName(String name);
}
