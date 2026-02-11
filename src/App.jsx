import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="destinations/:slug" element={<SingleDest />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
