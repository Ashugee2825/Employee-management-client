import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateEmployee() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/create', { name, email, position, salary })
            .then(res => {
                console.log(res);
                navigate('/');
            }).catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Add Employee</h2>
                    <div className='mb-2'>
                        <label>Name</label>
                        <input type="text" placeholder="Enter Name" className='form-control' onChange={e => setName(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" className='form-control' onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label>Position</label>
                        <input type="text" placeholder="Enter Position" className='form-control' onChange={e => setPosition(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label>Salary</label>
                        <input type="number" placeholder="Enter Salary" className='form-control' onChange={e => setSalary(e.target.value)} />
                    </div>
                    <button type="submit" className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateEmployee;
