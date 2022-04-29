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
import Start from './Components/Onboarding';


function App() {
  return (
    <Start />
    // <BrowserRouter>
    

    // <MainLayout>
    // <Routes>
    // <Route path="/" element={<Start />} />
    // <Route path="profile" element={<Profile />} />
    // </Routes>

    // </MainLayout>

    //</BrowserRouter>
  );
}
export default App;