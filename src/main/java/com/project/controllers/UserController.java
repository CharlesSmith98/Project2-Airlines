package com.project.controllers;

import java.util.LinkedHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.models.User;
import com.project.services.UserService;
import com.project.util.UserJsonParser;

@RestController
@RequestMapping(value="/users")
public class UserController {

	private UserService uService;
	private UserJsonParser ujp;

	@Autowired
	public UserController(UserService uService) {
		super();
		this.uService = uService;
		this.ujp = UserJsonParser.getUserJsonParser();
	}
	
	@PostMapping(value="/create")
	public User insertUser(@RequestBody User u) {
		System.out.println(u);
		return uService.createUser(u);
	}
	
	@PostMapping(value="/get")
	public User getUser(@RequestBody LinkedHashMap<String, String> userJson) {
		User u = ujp.parse(userJson);
		System.out.println("Result of parsing Json User:" + u);
		return ujp.parse(userJson);
	}
	
}
