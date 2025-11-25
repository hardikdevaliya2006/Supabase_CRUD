import React from 'react'
import { Routes } from 'react-router'

const App = () => {
  return (
    <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App