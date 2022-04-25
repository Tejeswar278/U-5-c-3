import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {Login} from './components/Login';
import {EmployeeList} from './components/Employeelist';
import {EmployeeDetails} from './components/EmployeeDetails';
import {Admin} from './components/Admin';
import {Navbar} from './components/Navbar';
import {Logout} from './components/Logout';
import {ProtectRouter} from './components/Privateroute';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/employee' element={<EmployeeList></EmployeeList>}></Route>
        <Route 
          path='/employees/:id'
          element={
            <ProtectRouter>
              <EmployeeDetails></EmployeeDetails>
            </ProtectRouter>
          }
          ></Route>
          <Route path='/admin' element={<Admin></Admin>}></Route>
          <Route path='/logout' element={<Logout></Logout>}></Route>
      </Routes>
    </div>
  )
}

export default App
