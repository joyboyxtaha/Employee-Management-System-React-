import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/dashboard/AdminDashBoard/AdminDashboard'
import EmployeeDashboard from './components/dashboard/EmployeeDashBoard/EmployeeDashboard'
import LocalStorage from './utils/LocalStorage'
const App = () => {
  const [user, setUser] = useState(null);  

  const handleLogin = (email,password) =>{
    if(email === 'admin@gmail.com' && password === 'admin'){
      setUser('admin');
  } else if(email === 'employee@gmail.com' && password === 'employee'){
      setUser('employee');
  }else{
    alert('Invalid email or password');
  }
}

  return (
    <div className='bg-[#1C1C1C] min-h-screen text-white'>
        {!user ? <Login handleLogin={handleLogin} /> : null}     
        {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}   
        <LocalStorage />
    </div>
    )
  }

export default App
