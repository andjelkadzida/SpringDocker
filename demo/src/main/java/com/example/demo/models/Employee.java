package com.example.demo.models;

import javax.persistence.*;

@Entity
public class Employee
{
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int employeeId;
    private String name;
    private String surname;

    public int getemployeeId()
    {
        return employeeId;
    }

    public void setemployeeId(int employeeId)
    {
        this.employeeId = employeeId;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getSurname()
    {
        return surname;
    }

    public void setSurname(String surname)
    {
        this.surname = surname;
    }

    public Employee()
    {
    }

    public Employee(int employeeId, String name, String surname)
    {
        this.employeeId = employeeId;
        this.name = name;
        this.surname = surname;
    }

    public String toString()
    {
        return "User: " + name + " " + surname;
    }
}
