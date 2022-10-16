package com.employee.employebackend.service;

import java.util.List;

import com.employee.employebackend.model.Employee;
import org.springframework.stereotype.Service;

@Service
public interface EmployeeService {
	List<Employee> getAllEmployees();
	void insertEmployee(Employee employee);
}