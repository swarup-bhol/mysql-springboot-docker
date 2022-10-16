package com.employee.employebackend.dao;

import java.util.List;

import com.employee.employebackend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeDao extends JpaRepository<Employee, Long> {
	List<Employee> getAllEmployees();

	void insertEmployee(Employee employee);
}