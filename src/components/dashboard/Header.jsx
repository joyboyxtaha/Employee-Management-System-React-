import React from 'react'

const Header = () => {
  const handleLogout = () => {
    user=null;
  }
  return (
    <div className='flex justify-between p-6 '>
      <h1 className='font-medium'>Hello, <span className='font-bold text-2xl'> Taha! 👋</span></h1>
      <button onClick={handleLogout} className='bg-red-500 cursor-pointer active:scale-95 text-white px-4 py-2 rounded font-bold text-sm items-center'>Logout</button>
    </div>
  )
}

export default Header
