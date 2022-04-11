import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Shipment.css';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');

    const handleInputName = (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
    };
    const handleInputPassword = (event) => {
        setPassword(event.target.value);
        console.log(event.target.value);
    };
    const handleInputAddress = (event) => {
        setAddress(event.target.value);
        console.log(event.target.value);
    };

    const createShipping = (event) => {
        event.preventDefault();
        const shipping = { name, email, password, address };
        console.log(shipping);
    };
    return (
        <div className='login-form'>
            <form onSubmit={createShipping}>
                <fieldset>
                    <legend><h2 className='form-title'>Shipping form</h2></legend>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleInputName} type="text" name="name" id="" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        {/* <input onBlur={handleInputEmail} type="email" name="email" id="" required /> */}
                        <input value={user?.email} disabled type="email" name="email" id="" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Phone</label>
                        <input onBlur={handleInputPassword} type="number" name="password" id="" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Address</label>
                        <input onBlur={handleInputAddress} type="text" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red', marginBottom: '1rem' }}>{name}</p>
                    <input type="submit" value="Add to shipping" className='register-btn' />
                </fieldset>
            </form>
        </div>
    );
};

export default Shipment;