import React from 'react'
import { useState } from 'react'

const Login = () => {
  const[state,setState]=useState('Sign up')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[name,setName]=useState('')

const onSubmitHandler= async()=>{
  e.preventDefault()
}

  return (
    
      <form className='min-h[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state==='Sign up' ? 'Create Account':'Login'}</p>
        <p>please {state==='Sign up' ? 'Sign up':'Login'} to book appointment</p>
        {state === 'Sign up'&&<div className='w-full'> 
          <p>Full Name</p>
        <input  className='border border-zinc-300 rounded w-full -2 mt-1' type="text" onChange={(e)=>setName(e.target.name) } value={name} required/></div>}
        <div className='w-full'> 
          <p>Email</p>
        <input  className='border border-zinc-300 rounded w-full -2 mt-1' type="email" onChange={(e)=>setEmail(e.target.email) } value={email} required/></div>
        <div className='w-full'> 
          <p>Password</p>   
        <input className='border border-zinc-300 rounded w-full -2 mt-1' type="password" onChange={(e)=>setPassword(e.target.password) } value={name} required/></div>
        <button className='bg-primary text-white w-full rounded-md text-base'>{state==='Sign up' ? 'Create Account':'Login'}</button>
        {state==='Sign up'
        ?<p>Already have account?<span onClick={()=>setState('Login')} 
        className='text-primary underline cursor-pointer'>Login here</span></p>:
        <p>Create a new account? <span onClick ={()=>setState('Sign up')} 
        className='text-primary underline cursor-pointer'>click here</span></p>}
        </div></form>
  
  )
}

export default Login
