import './App.css';
import React from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Error from './components/Error';

function App() {
  return (
   <Router>
   <Routes>
     <Route path='/' element={<Dashboard/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path="*" element={<Error/>}/>
   </Routes>
   </Router>
  );
}

export default App;
