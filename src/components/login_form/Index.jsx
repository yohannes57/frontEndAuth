import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth/Auth_context";


const LoginForm = ({ setNewUser }) => {
const {login}=useAuth();
const [formData,setFormData]=useState({
  email:'',
  password:''
})

const nav=useNavigate()
//handle input
const handleChange=(e)=>{
  setFormData({
    ...formData,
    [e.target.name]:e.target.value
  })
}
//handle form 
const handleSubmit =async (e)=>{
  e.preventDefault()
  try {
      await login(formData)
      nav('/dashboard')
      console.log('successfully')
    } catch (err) {
    console.error(err)
  }
}

//click 
  const handleClick = () => {
    setNewUser(true);
  };

  return (
    <div className='forms'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <label htmlFor='email'>Email: </label>
        <input 
        type='email' 
        id='email' 
        name='email'
         placeholder='Email'
         onChange={handleChange}
         />
        <label htmlFor='password'>Password: </label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Password'
          minLength='6'
          onChange={handleChange}
        />
        <button type='submit'>
          Log In
        </button>
      </form>
      <p>
        Dont have an account? <button onClick={handleClick}>Sign Up</button>
      </p>
    </div>
  );
};

export default LoginForm;
