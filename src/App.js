import React from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import './App.css';
import AddPost from './pages/AddPost';
import HomePage from './pages/HomePage';
import HomePost from './pages/HomePost';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
    return (
      <BrowserRouter >
         <Routes>
           <Route exact path='/' element={<HomePage />}></Route>
           <Route exact path='/login' element={<Login />}></Route>
           <Route exact path='/signup' element={<SignUp />}></Route>
           <Route exact path='/add_post' element={<AddPost />}></Route>
           <Route exact path='/post_home' element={<HomePost />}></Route>
         </Routes>
      </BrowserRouter>
    );

}

export default App;
