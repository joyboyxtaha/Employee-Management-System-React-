import React from 'react'
import { useState } from 'react'

const TaskForm = () => {
    const [title,setTitle] = useState('');
  const [date,setDate] = useState('');
  const [assignTo,setAssignTo] = useState('');
  const [category,setCategory] = useState('');
  const [description,setDescription] = useState('');

   function SubmitHandler(e){
     e.preventDefault();
  }
  return (
    <div className="bg-gray-900 flex items-center justify-center ">

    <div className="bg-gray-800 text-white w-full  p-6 rounded-2xl shadow-lg mx-4">
      {/* Header */}
      <div className="flex items-center mb-5">
        <button className="text-gray-400 hover:text-white mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-semibold">Create Task</h1>
      </div>

      {/* Task Form */}
      <form className=" flex w-[100%] gap-10  flex-col">
        <div className='w-full flex gap-10'>
        {/* Task Title */}
        <div className='space-y-4 w-1/2 flex flex-col'>
        <div>
          <label className="block text-sm mb-1 text-gray-300">Task Title</label>
          <input
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);            
          }}
            type="text"
            placeholder="Make a UI design"
            className="w-full p-2.5 bg-gray-700 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        

        {/* Date */}
        <div>
          <label className="block text-sm mb-1 text-gray-300">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e)=>{
            setDate(e.target.value);            
          }}
            className="w-full p-2.5 bg-gray-700 rounded-lg text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Assign To */}
        <div>
          <label className="block text-sm mb-1 text-gray-300">Assign To</label>
          <input
            type="text"
            value={assignTo}
            onChange={(e)=>{
            setAssignTo(e.target.value);            
          }}
            placeholder="Assignee name"
            className="w-full p-2.5 bg-gray-700 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm mb-1 text-gray-300">Category</label>
          <input
          value={category}
            type="text"
            onChange={(e)=>{
            setCategory(e.target.value);            
          }}
            placeholder="Design, Development, etc."
            className="w-full p-2.5 bg-gray-700 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Button */}
        
        </div>
                {/* Description */}
        <div className='space-y-4 w-1/2'>
          <label className="block text-sm mb-1  text-gray-300">Description</label>
          <textarea
          value={description}
            onChange={(e)=>{
            setDescription(e.target.value);            
          }}
          
            rows="3"
            placeholder="Detailed description of task (Max 500 words)"
            className="w-full p-3 h-32 bg-gray-700 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        
        </div>
        <button
          type="submit"
          onClick={(e)=>{
            SubmitHandler(e);
          }}
          className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition duration-200"
        >
          Create Task
        
        </button>
      </form>
    </div>
  </div>    
  )
}

export default TaskForm
