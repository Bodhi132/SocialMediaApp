import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SignupPage = () => {

    const[ready,setReady]=useState(false)

    const [newUser, setNewUser] = useState(
        {
            firstname: '',
            lastname: '',
            location: '',
            email: '',
            password: '',
            photo: ''
        }
    )

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }

    const handlePhoto = (e) => {
        setNewUser({ ...newUser, photo: e.target.files[0] })
        console.log(newUser.photo);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('firstname', newUser.firstname)
        formData.append('lastname', newUser.lastname)
        formData.append('location', newUser.location)
        formData.append('email', newUser.email)
        formData.append('password', newUser.password)
        formData.append('photo', newUser.photo)

        console.log(newUser.photo);

        axios.post('http://localhost:4000/signup', formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        
        setReady(true)
    }

    if(ready)
    {
        return <Navigate to={'/login'}/>
    }

    return (
        <div className='flex flex-col items-center mt-6 pt-2 inputText'>
            <form onSubmit={handleSubmit} encType='multipart/form-data' className='border rounded-md p-4 w-8/12  h-6/12 flex flex-col items-center bg-amber-400'>
                <div>
                    <label >
                        <input
                            type='file'
                            accept='.png, .jpg, .jpeg'
                            name='photo'
                            onChange={handlePhoto}
                            className="hidden "
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-48 h-48 py-2 hover:cursor-pointer text-blue-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </label>
                </div>
                <div className='flex flex-col items-start py-2'>
                    <label>First Name</label>
                    <input
                        type='text'
                        placeholder='firstname'
                        name='firstname'
                        value={newUser.firstname}
                        onChange={handleChange}
                        className='border p-1 px-2 w-64 rounded-md'
                    />
                </div>
                <div className='flex flex-col items-start py-2'>
                    <label>Last Name</label>
                    <input
                        type='text'
                        placeholder='lastname'
                        name='lastname'
                        value={newUser.lastname}
                        onChange={handleChange}
                        className='border p-1 px-2 w-64 rounded-md'
                    />
                </div>
                <div className='flex flex-col items-start py-2'>
                    <label>Location</label>
                    <input
                        type='text'
                        placeholder='location'
                        name='location'
                        value={newUser.location}
                        onChange={handleChange}
                        className='border p-1 px-2 w-64 rounded-md'
                    />
                </div>
                <div className='flex flex-col items-start py-2'>
                    <label>Email</label>
                    <input
                        type='email'
                        placeholder='email'
                        name='email'
                        value={newUser.email}
                        onChange={handleChange}
                        className='border p-1 px-2 w-64 rounded-md'
                    />
                </div>
                <div className='flex flex-col items-start py-2'>
                    <label>Password</label>
                    <input
                        type='text'
                        placeholder='password'
                        name='password'
                        value={newUser.password}
                        onChange={handleChange}
                        className='border p-1 px-2 w-64 rounded-md'
                    />
                </div>
                <input type="submit" value="Sign Up" className='border px-4 hover:cursor-pointer border-black rounded hover:bg-amber-800' />
            </form>
            <div className='p-3 ' >
                Already a user?<Link to='/login' className='ml-1 font-serif'>Login</Link>
            </div>
        </div>
    )
}

export default SignupPage