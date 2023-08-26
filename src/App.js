import React from 'react'
import AppRouter from './components/AppRouter'

import AuthcontextProvvider from './contexts/AuthContext'

function App() {
  
  return<AuthcontextProvvider><AppRouter /></AuthcontextProvvider> 
}

export default App
