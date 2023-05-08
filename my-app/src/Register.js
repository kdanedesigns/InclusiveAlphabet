import React, { useState } from 'react';
import axios from 'axios';

const registerUrl = 'https://179o0u45ad.execute-api.us-east-2.amazonaws.com/create_user/register'


const Register = () => {
    const [person_name, setPerson_name] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        if (username.trim() === '' || email.trim() === ''|| person_name.trim() === '' || password.trim() === '') {
            setMessage('All fields are required');
            return;
        }

        const requestConfig = {
            headers: {
                'x-api-key': 'SLao93mkoc5UKfUg0BKlO5MBFdwbzCl37ONLPqcw'
            }
        }
        const requestBody = {
            username: username,
            email: email,
            person_name: person_name,
            password: password
        }
        axios.post(registerUrl, requestBody, requestConfig).then(response => {
            setMessage('Registration Complete & Successful');
        }).catch(error => {
            if (error.response.status === 401 || error.response.status === 403) {
                setMessage('failed');
            } else {
                setMessage('Sorry, the backend server is dowon. Please try again later.');
            }
        })

        console.log('submit button pressed')
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h5>Register</h5>
                Name: <input type="text" vlaue={person_name} onChange={event => setPerson_name(event.target.value)} /> <br/>
                E-mail: <input type="text" vlaue={email} onChange={event => setEmail(event.target.value)} /> <br/>
                Username: <input type="text" vlaue={username} onChange={event => setUsername(event.target.value)} /> <br/>
                Password: <input type="password" vlaue={password} onChange={event => setPassword(event.target.value)} /> <br/>
                <input type="submit" value="Register" />
            </form>
        {message && <p classNam="message">{message}</p>}
        </div>
    )
}

export default Register; 