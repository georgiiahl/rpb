import React, { Component, useEffect, useState } from 'react';
import '../src/styles/App.css'
import GalleryForm from './components/GalleryForm/GalleryForm'
import GalleryItem from './components/GalleryItem/GalleryItem';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { makeTestIdProps } from '@guinie/react-testid';

const App = () => {
  
  return (
    <Router>
    <Routes>
      <Route
        path='/'
        element={<GalleryForm />}
      />

      <Route
        path='/getGalleryItem/:id'
        element={<GalleryItem />}
      />
    </Routes>
    </Router>
   
  )
}

export default App;
