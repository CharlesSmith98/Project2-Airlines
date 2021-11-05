package com.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.models.User;
import com.project.repository.UserRepo;

@Service
public class UserService {

	private UserRepo uDao;

	@Autowired
	public UserService(UserRepo uDao) {
		super();
		this.uDao = uDao;
	}
	
	public User createUser(User u) {
		try {
			uDao.save(u);
			return u;
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
}
