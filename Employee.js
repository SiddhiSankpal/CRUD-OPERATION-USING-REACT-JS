import React from "react";
import { useState, useEffect } from "react";
//import '.App.css'
import './Empc.css'


export default function ListEmp(props) {
  const [employees, setEmployee] = useState([]);

  useEffect(() => {
    try{
    fetch("http://localhost:5221/api/Employee/")
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      });
    }catch(error){
      <h1 style={{color:'red'}}>Fail to Connect Server:{error}</h1>
    }
  }, []);
  

  return (
    <div>
      <h2>Employees Data...</h2>
      
      <h1 style={{color:"goldenrod"}}>Fetch data using .net web...</h1>
      <table className="custom-table"> 
      
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Age</th>
            <th colSpan={3} style={{textAlign: "center"}}>Oprations</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>{emp.age}</td>
              
              
              <button class ="colored-button"> <td>
                <a href={"/emp/" + emp.id}>display</a>
              </td></button>
             
              <button class ="colored-button" ><td>
                <a href={"/empedit/" + emp.id}>Edit</a>
              </td></button>
              
              <button class ="colored-button"> <td>
                <a href={"/empdel/" + emp.id}>delete</a>
              </td></button>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}