import React from 'react'
import Header from '../Header'
import TaskNumberList from './TaskNumberList'
import TaskList from '../TaskList'

const EmployeeDashboard = () => {
  return (
    <div>
        <Header />
        <div className='mx-4 md:mx-15'>
          <TaskNumberList />
          <TaskList />
        </div>
    </div>
  )
}

export default EmployeeDashboard
