import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";


const LoginForm = () => {
  return (
    <div className='wrapper'>
      <form action=''>
        <h1>Login</h1>
        <div className='input-box'>
          <input type='text' placeholder='Username' required />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' required />
          <FaLock className='icon' />
        </div>
        <div class="inputbox">
          <input required="required" type="text">
          <span>Confirm Password</span>
    <i></i>
</div>
        <div className='remember-forgot'>
          <label><input type='checkbox' />Remember me</label>
          <a href='#'>Forgot Password?</a>
        </div>
        <button type='submit'>Login</button>
        <div>
        <button class="btn"><i class="animation"></i>BUTTON<i class="animation"></i>
        </button>
        </div>

        <div className='register-link'>
          <p>Don't have an acccount?<a href='#'>Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm
