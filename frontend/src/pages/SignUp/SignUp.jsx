import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import axiosInstance from '../../utils/axiosInstance'
import PasswordInput from '../../components/Input/PasswordInput';

const SignUp = () => {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState(null);

   const navigate=useNavigate();

  const handleSignUp=async(e)=>{
    e.preventDefault();

    if(!name){
      setError("Please enter your name");
      return;
    }

    if(!validateEmail(email)){
          setError("Please enter a valid email");
          return;
        }
        if(!password){
          setError("Please enter the password");
          return;
        }
        setError("");
        //Signup API call
         try{
       const response=await axiosInstance.post("/create-account",{
        fullName:name,
        email:email,
        password:password,
       });
       //handle successfull registration response
       if (response.data && response.data.accessToken) {
      localStorage.setItem("token", response.data.accessToken);
      navigate('/'); // ✅ Redirect to homepage after signup
    } else if (response.data && response.data.message) {
      setError(response.data.message);
    }
    }catch(error){
      //handle registration error
      if(error.response && error.response.data && error.response.data.message){
        setError(error.response.data.message)
      }else{
        setError("An expected error occur.Please try again.")
        console.log(error);
      }
    }
  };

  return (
  <>
   <Navbar/>
   <div className='flex items-center justify-center mt-28'>
     <div className='w-96 border rounded bg-white px-7 py-10'>
       <form onSubmit={handleSignUp}>
        <h4 className='text-2xl mb-7'>SignUp</h4>
        
        <input type="text" placeholder='Name' className='input-box'
           value={name}
           onChange={(e)=>setName(e.target.value)}
        />

        <input type="text" placeholder='Email' className='input-box'
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
        />

        <PasswordInput
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>

         {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}

        <button type='submit' className="btn-primary">Create Acount</button>

        <p className='text-sm text-center mt-4'>
            Already have an acount? {""}
          <Link to='/login' className="font-medium text-primary underline"> 
              Login
          </Link>
        </p>

       </form>
     </div>
   </div>
  </>
  )
}

export default SignUp