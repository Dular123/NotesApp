import React from 'react'
import Home from './pages/Home/Home';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

const routes=(
  <Router>
   <Routes>
     <Route path='/' exact element={<Home/>}></Route>
     <Route path='/login' exact element={<Login/>}></Route>
     <Route path='/signup' exact element={<SignUp/>}></Route>
   </Routes>
  </Router>
)

const App = () => {
  return (
    <div>{routes}</div>
  )
}

export default App