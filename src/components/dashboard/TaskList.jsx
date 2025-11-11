import React from 'react'

const TaskList = () => {
  return (
    <div className='flex flex-col gap-3 flex-nowrap overflow-y-auto'>
      <div className='  w-full bg-orange-400 p-4 rounded flex flex-col '>
        <div className='flex justify-between '>
          <h3 className='cursor-pointer font-medium text-sm bg-red-500 px-3 py-1 rounded'>High !</h3>
          <h3 className='font-bold'>8,August,2025</h3>
        </div>
        <h1 className='font-bold text-lg mt-3'>Nashta Karna Hai</h1>
        <p className='text-sm'>Naan Chany Ayein Gy Unse Nashta Karna Hai</p>
      </div>
      <div className='  w-full bg-orange-400 p-4 rounded flex flex-col '>
        <div className='flex justify-between '>
          <h3 className='cursor-pointer font-medium text-sm bg-red-500 px-3 py-1 rounded'>High !</h3>
          <h3 className='font-bold'>8,August,2025</h3>
        </div>
        <h1 className='font-bold text-lg mt-3'>Nashta Karna Hai</h1>
        <p className='text-sm'>Naan Chany Ayein Gy Unse Nashta Karna Hai</p>
      </div>
      
    </div>
  )
}

export default TaskList
