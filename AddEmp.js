import React from 'react';
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

import Button from './Button';

export  function AddEmp() {
    
    const [employee, setEmployee] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
    // let handleClick = () => { navigate(-1) }
   
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEmployee(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(employee);
        console.log(JSON.parse(demo));
        fetch("http://localhost:5221/api/Employee/", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
        event.preventDefault();
        navigate('/Employee');

        
    }

    return (
        <form onSubmit={handleSubmit} className='gcontainer form-addemp' >
         
            <br />
            <label>name:</label><br />
            <input
                type="text"
                name="name"
                value={employee.name || ""}
                onChange={handleChange}
            />
            <br />
            <label>Email:</label><br />
            <input
                type="text"
                name="email"
                value={employee.email || ""}
                onChange={handleChange}
            />
            <br />
            <label>Department:</label><br />
            <input
                type="text"
                name="department"
                value={employee.department || ""}
                onChange={handleChange}
            />
            <br />
            <input type="submit" />
            {/* <Button  variant="primary" onClick={handleClick}>Back</Button> */}
        </form>
    );
}
export default AddEmp;