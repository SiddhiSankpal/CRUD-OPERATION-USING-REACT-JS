import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EmpCard from './EmpCard';

export default function GetEmp() {
  const [employee, setEmployee] = useState({});
  const { id } = useParams()
  useEffect(() => {
    fetch("http://localhost:5221/api/Employee/" + id)
      .then(res => res.json())
      .then((result) => { setEmployee(result); }
      );
  }, [id]);
  return (
    
    <div>
      <EmpCard key={id} myemp={employee}/>

    </div>
  );
}