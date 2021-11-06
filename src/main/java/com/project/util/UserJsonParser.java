package com.project.util;

import java.util.LinkedHashMap;

import com.project.models.User;

public class UserJsonParser {

	private static UserJsonParser ujp;
	
	public static synchronized UserJsonParser getUserJsonParser() {
		if(ujp == null) {
			return new UserJsonParser();
		}
		return ujp;
	}
	
	public User parse(LinkedHashMap<String, String> userJson) {
		int userId = Integer.parseInt(userJson.get("userId"));
		String firstName = userJson.get("firstName");
		String lastName = userJson.get("lastName");
		String username = userJson.get("username");
		String password = userJson.get("password");
		int roleId = Integer.parseInt(userJson.get("roleId"));
		String email = userJson.get("email");
		User u = new User(userId, username, password, firstName, lastName, roleId, email);
		return u;
	}
	
}
