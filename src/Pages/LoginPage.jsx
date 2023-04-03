import axios from 'axios';
import React from 'react'
import { useState,useContext } from 'react';
import { Link,Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext.jsx';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUser} = useContext(UserContext)

    async function handleLoginSubmit(ev) {
        ev.preventDefault()
        try {
            const {data}=await axios.post('/login',{email,password})
            setUser(data)
            alert('Login successful')
            setRedirect(true)
        } catch (e) {
            alert('Login Failed')
        }
    }

    if(redirect)
    {
        return <Navigate to={'/'}/>
    }

    return (
        <div className='flex flex-col items-center mt-6 pt-2 inputText'>
            <form onSubmit={handleLoginSubmit} className='border rounded-md p-4 w-5/12 h-auto flex flex-col items-center bg-amber-400'>
                <div className='flex flex-col items-start py-2'>
                    <label>Email</label>
                    <input
                        type='email'
                        placeholder='email'
                        name='email'
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                        className='border p-1 px-2 w-64 rounded-md'
                    />
                </div>
                <div className='flex flex-col items-start py-2'>
                    <label>Password</label>
                    <input
                        type='text'
                        placeholder='password'
                        name='password'
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                        className='border p-1 px-2 w-64 rounded-md' 
                    />
                </div>
                <input type="submit" value="Login" className='border px-4 hover:cursor-pointer border-black rounded hover:bg-amber-800'/>
            </form>
            <div to='/signup'>Not an user? <Link to='/signup' className='ml-1 font-serif'>Sign Up</Link></div>
        </div>
    )
}

export default LoginPage