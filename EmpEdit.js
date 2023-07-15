import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

export function EmpEdit(props) {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5221/api/Employee/" + id)
      .then(res => res.json())
      .then((result) => {
        setEmployee(result);
      }
      );
  }, [id]);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEmployee(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = (event) => {
    let demo = JSON.stringify(employee);
    console.log(JSON.parse(demo));
    fetch("http://localhost:5221/api/Employee/" + id, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: demo
    }).then(r => { console.log(r) })
    event.preventDefault();
    navigate('/Employee');

    alert(employee);
  }
  return (
    <div className="container">
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">Code:</label>
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            value={employee.id || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={employee.name || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={employee.email || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            className="form-control"
            id="department"
            name="department"
            value={employee.department || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            className="form-control"
            id="age"
            name="age"
            value={employee.age || ""}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
} export default EmpEdit;