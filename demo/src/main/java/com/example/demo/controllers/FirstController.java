package com.example.demo.controllers;

import com.example.demo.models.Employee;
import com.example.demo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FirstController
{
    @Autowired
    EmployeeRepository employeeRepository;

    @RequestMapping("/")
    public String home(Model model)
    {
        return "index";
    }

    @RequestMapping("/register")
    public String register()
    {
        return "register";
    }
    @RequestMapping("/addEmployee")
    public String addEmployee(Employee employee)
    {
        employeeRepository.save(employee);
        return "index";
    }

}
