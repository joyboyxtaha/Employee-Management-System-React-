import React, { useState } from 'react'
import TaskForm from './TaskForm'
import TaskList from '../TaskList'
import Header from '../Header'
const AdminDashboard = () => {
 

  return (
    <div>
      <Header />    <div className='flex flex-col gap-5 px-10'>
      <h1 className='text-3xl font-bold text-center'>Admin Dashboard</h1>
    <TaskForm />
    <TaskList />
    </div>
    </div>
  )
}

export default AdminDashboard
