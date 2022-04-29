import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import MainLayout from './Components/MainLayout';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Start from './Components/Onboarding';
import useStore from './context';
function App() {
  const state = useStore((state) => state.state);
  return state ? (
    <Start />
  ) : (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='profile' element={<Profile />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
export default App;
