import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Employee() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => setEmployees(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:8081/employee/' + id);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to="/create" className='btn btn-success'>Add</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Position</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.position}</td>
                                    <td>{data.salary}</td>
                                    <td>
                                        <Link to={`update/${data.id}`} className="btn btn-primary">Update</Link>
                                        <button className="btn btn-danger ms-2" onClick={() => handleDelete(data.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Employee;
