package com.project.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table()
public class Flight {

	@Id
	@Column(name="flight_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="takeoff")
	private Date takeoff;
	
	@Column(name="eta")
	private Date eta;
	
	@Column(name="destination")
	private String destination;
	
	@Column(name="origin")
	private String origin;
	
	@Column(name="seats")
	private int seats;
	
	public Flight() {
		
	}

	public Flight(int id, String name, Date takeoff, Date eta, String destination, String origin, int seats) {
		super();
		this.id = id;
		this.name = name;
		this.takeoff = takeoff;
		this.eta = eta;
		this.destination = destination;
		this.origin = origin;
		this.seats = seats;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getTakeoff() {
		return takeoff;
	}

	public void setTakeoff(Date takeoff) {
		this.takeoff = takeoff;
	}

	public Date getEta() {
		return eta;
	}

	public void setEta(Date eta) {
		this.eta = eta;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getOrigin() {
		return origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public int getSeats() {
		return seats;
	}

	public void setSeats(int seats) {
		this.seats = seats;
	}

	@Override
	public String toString() {
		return "Flight [id=" + id + ", name=" + name + ", takeoff=" + takeoff + ", eta=" + eta + ", destination="
				+ destination + ", origin=" + origin + ", seats=" + seats + "]";
	}
	
}
