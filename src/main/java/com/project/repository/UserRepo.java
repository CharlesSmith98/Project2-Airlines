package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.models.User;

public interface UserRepo extends JpaRepository<User, Integer> {
	
}
