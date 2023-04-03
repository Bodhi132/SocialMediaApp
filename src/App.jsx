// import { useState } from 'react'
import './App.css'
import HomePage from './Pages/HomePage'
import SignupPage from './Pages/SignupPage'
// import Posts from './components/Posts'
import {Route,Routes} from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import { UserContextProvider } from '../UserContext';
import axios from 'axios';
import Layout from './components/Layout'
import ProfilePage from './Pages/ProfilePage'
// import UserContext from '../UserContext'

axios.defaults.baseURL = 'http://127.0.0.1:4000';
axios.defaults.withCredentials = true;

function App() {

  return (
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/user:id' element={<ProfilePage/>}/>
          </Route>
        </Routes>
      </UserContextProvider>

  )
}

export default App
