import React from 'react'

const TaskNumberList = () => {
  return (
    <div className='flex flex-wrap md:flex-nowrap gap-5 justify-center my-10 '>
      <div className='flex flex-col  items-center justify-center gap-0 md:gap-3  md:w-[45%] w-[150px] rounded-xl bg-green-400 py-2 md:py-4'>
        <h1 className='text-xl md:text-4xl font-bold'>0</h1>
        <h3 className='font-bold text-xl md:text-2xl'>New Task</h3>
      </div>
      <div className='flex flex-col  items-center justify-center gap-0 md:gap-3   md:w-[45%] w-[150px] rounded-xl bg-blue-400 py-2 md:py-4'>
        <h1 className='text-xl md:text-4xl font-bold'>0</h1>
        <h3 className='font-bold text-xl md:text-2xl'>Completed</h3>
      </div>
      <div className='flex flex-col  items-center justify-center gap-0 md:gap-3   md:w-[45%] w-[150px] rounded-xl bg-red-400 py-2 md:py-4'>
        <h1 className='text-xl md:text-4xl font-bold'>0</h1>
        <h3 className='font-bold text-xl md:text-2xl'>Accepted</h3>
      </div>
      <div className='flex flex-col  items-center justify-center gap-0 md:gap-3   md:w-[45%] w-[150px] rounded-xl bg-amber-400 py-2 md:py-4'>
        <h1 className='text-xl md:text-4xl font-bold'>0</h1>
        <h3 className='font-bold text-xl md:text-2xl'>Failed</h3>
      </div>
      
    </div>
  )
}

export default TaskNumberList
