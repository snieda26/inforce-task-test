import React from 'react';
import './App.css';
import { ProductList, ProductAbout } from './pages'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/about/:id" element={<ProductAbout />} />
      </Routes>
    </>
  );
}

export default App;
