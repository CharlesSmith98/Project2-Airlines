package com.project.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.models.User;
import com.project.repository.UserRepo;

@Service
public class UserService {
	
	private UserRepo uDao;
	
	@Autowired
	public UserService(UserRepo u) {
		this.uDao = u;
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
	
	public List<User> getAllUser() {
		try {
			return uDao.findAll();
		} catch(Exception e) {
			return new ArrayList<User>();
		}
	}
	
	public User getUserById(int id) {
		return uDao.findById(id);
	}
	
	public User signIn(String username, String password) {
		return uDao.findByUsernameAndPassword(username, password);
	}
	
	public List<User> getUserByroleId(int id) {
		return uDao.findByRoleId(id);
	}
	
}
