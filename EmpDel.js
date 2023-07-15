import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
export function EmpDel(props) {
    const [employee, setEmployee] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:5221/api/Employee/" + id)
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, {});
    const handledelete = (event) => {
        
        fetch("http://localhost:5221/api/Employee/" + id, {
            method: 'Delete'
        })
            .then(res => console.log(res))
        navigate('/');
    }

    return (
        <div>
            <h1>R you sure</h1>
            <label>Id:</label>
            {employee.id}<br />
            <label>name:</label>
            {employee.name}<br />
            <label>Email:</label>
            {employee.email}<br />
            <label>Department:</label>
            {employee.department}<br />
            
            <form>
                <button onClick={handledelete}>Delete</button>
            </form>
        </div>
    );
}
export default EmpDel;