import React from 'react'
import {Link} from 'react-router-dom'
import loginImage from '../assets/login-image3.jpg'

function RegisterPage() {
  return (
    <div className='mt-10 md:mt-16 w-full flex items-center justify-center h-screen'>
    <div className="bg-gray-50 flex justify-center items-center w-full">

    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 ">
    <h1 className="text-2xl font-semibold mb-4 text-dark">Register</h1>
    <form action="#" method="POST">
      <div className="mb-4">
        <label for="username" className="block text-gray-600">Username</label>
        <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-secondary" autocomplete="off"/>
      </div>
      <div className="mb-4">
        <label for="email" className="block text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:secondary" autocomplete="off"/>
      </div>
      <div className="mb-4">
        <label for="password" className="block text-gray-600">Password</label>
        <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:secondary" autocomplete="off"/>
      </div>
      <button type="submit" className="bg-secondary hover:bg-primary text-white font-semibold rounded-md py-2 px-4 w-full cursor-pointer">Register</button>
    </form>
    <div className="mt-6 text-primary text-center">
      <Link to="/login" className="hover:underline">Already have an account? Log In</Link>
    </div>
  </div>

    <div className="w-1/2 h-screen hidden lg:block">
      <img src={loginImage} alt="Login Image" className="object-cover object-center w-full h-full"/>
    </div>

  </div>
</div>
  )
}

export default RegisterPage