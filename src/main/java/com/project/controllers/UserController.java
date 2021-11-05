package com.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.models.User;
import com.project.service.UserService;

@RestController
@RequestMapping(value="/user")
public class UserController {
	
	private UserService uServ;
	
	@Autowired
	public UserController(UserService u) {
		this.uServ = u;
	}
	
	@PostMapping(value="/create")
	public User createUser(@RequestBody User u) {
		return uServ.createUser(u);
	}
	
	@GetMapping(value="/get")
	public List<User> getAllUser() {
		return uServ.getAllUser();
	}
	
}
