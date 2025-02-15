import React from 'react'
import {Link} from 'react-router-dom'
import loginImage from '../assets/login-image3.jpg'

function LoginPage() {
  return (
    <div className='mt-10 md:mt-16 w-full flex items-center justify-center h-screen'>
        <div className="bg-gray-50 flex justify-center items-center w-full">

        <div className="w-1/2 h-screen hidden lg:block">
          <img src={loginImage} alt="Login Image" className="object-cover object-center w-full h-full"/>
        </div>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4 text-dark">Login</h1>
        <form action="#" method="POST">
          <div className="mb-4">
            <label for="username" className="block text-gray-600">Username</label>
            <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-secondary" autocomplete="off"/>
          </div>
          <div className="mb-4">
            <label for="password" className="block text-gray-600">Password</label>
            <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:secondary" autocomplete="off"/>
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="remember" name="remember" className="text-secondary"/>
            <label for="remember" className="text-gray-600 ml-2">Remember Me</label>
          </div>
          <div className="mb-6 text-gray-400">
            <a href="#" className="hover:underline">Forgot Password?</a>
          </div>
          <button type="submit" className="bg-secondary hover:bg-primary text-white font-semibold rounded-md py-2 px-4 w-full cursor-pointer">Login</button>
        </form>
        <div className="mt-6 text-primary text-center">
          <Link to="/register" className="hover:underline">Don't have an account? Sign up</Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default LoginPage