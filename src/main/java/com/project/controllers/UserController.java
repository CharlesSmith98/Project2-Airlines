package com.project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.models.User;
import com.project.services.UserService;

@RestController
@RequestMapping(value="/users")
public class UserController {

	private UserService uService;

	@Autowired
	public UserController(UserService uService) {
		super();
		this.uService = uService;
	}
	
	@PostMapping(value="/create")
	public User insertUser(@RequestBody User u) {
		System.out.println(u);
		return uService.createUser(u);
	}
	
}
