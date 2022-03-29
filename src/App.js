import './App.css';
import React from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Error from './pages/Error';

function App() {
  return (
   <Router>
   <Routes>
     <Route path='/' element={<Login/>}/>
     <Route path='/home' element={<Dashboard/>}/>
     <Route path="*" element={<Error/>}/>
   </Routes>
   </Router>
  );
}

export default App;
