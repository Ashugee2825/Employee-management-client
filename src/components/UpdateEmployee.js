import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateEmployee() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8081/employee/' + id)
            .then(res => {
                setName(res.data.name);
                setEmail(res.data.email);
                setPosition(res.data.position);
                setSalary(res.data.salary);
            }).catch(err => console.log(err));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/update/' + id, { name, email, position, salary })
            .then(res => {
                console.log(res);
                navigate('/');
            }).catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Update Employee</h2>
                    <div className='mb-2'>
                        <label>Name</label>
                        <input type="text" value={name} className='form-control' onChange={e => setName(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label>Email</label>
                        <input type="email" value={email} className='form-control' onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label>Position</label>
                        <input type="text" value={position} className='form-control' onChange={e => setPosition(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label>Salary</label>
                        <input type="number" value={salary} className='form-control' onChange={e => setSalary(e.target.value)} />
                    </div>
                    <button type="submit" className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateEmployee;
