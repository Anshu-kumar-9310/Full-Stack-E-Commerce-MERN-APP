import React from 'react'
import { Link } from 'react-router-dom'
import SuccessImage from '../assest/success.gif'

const Success = () => {
  return (
    <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-2 rounded'>
      <img src={SuccessImage} width={150} height={150}/>
      <p className='text-green-600 font-bold text-xl'>Payment Successfully</p>
      <Link to={'/myOrders'} className='p-2 px-3 mt-5 border-2 border-green-600 rounded font-semibold text-green-600 hover:text-white hover:bg-green-600 transition-all duration-700'>See Orders</Link>
    </div>
  )
}

export default Success