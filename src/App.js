import React from 'react';
import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import MainLayout from './Components/MainLayout';
import Home from './Components/Home';
import Profile from './Components/Profile';


function App() {
  return (
    <BrowserRouter>
    

    <MainLayout>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="profile" element={<Profile />} />
    </Routes>

    </MainLayout>

    </BrowserRouter>
  );
}
export default App;