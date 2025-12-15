import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField, Button, Box } from '@mui/material';
import Swal from "sweetalert2";
import axios from 'axios';

function Signup() {
   const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    if (data.emails === "" || data.password === "" || data.username === "" || data.cnic === "") {
      
      Swal.fire("All fields are required");
      return;
    }
 
  if (data.cnic.length !== 13) {
     Swal.fire("cnic must be 13 digits long");
      return;
  }
axios.post('https://microfinance-56ai.onrender.com/register', data)
  .then(response => {
    console.log(response.data);})
  .catch(error => {
    console.error('There was an error!', error);
  });

    
    console.log(data);
  };

  return (
    <Box 
    component="form" 
    onSubmit={handleSubmit(onSubmit)} 
    sx={{ width: 300, margin: "auto", mt: 5 }}
    className='bg-gray-400 p-6 rounded-lg shadow-md'>
      <h3 className='text-center font-bold'>Register</h3>
      <img src="/user.png" alt="image" className='w-16 flex justify-self-center mt-3' />
       <TextField 
      {...register("username")} 
      label="username" 
      fullWidth margin="normal" 
      />
      <TextField 
      {...register("email")} 
      label="Email" 
      fullWidth margin="normal" 
      />
      <TextField 
      {...register("password")} 
      label="Password" 
      type="password" 
      fullWidth margin="normal" 
      />
       <TextField 
      {...register("cnic")} 
      label="cnic" 
      type="number" 
      fullWidth margin="normal" 
      />
      <Button 
      type="submit" 
      variant="contained" 
      fullWidth
      >
        Login
      </Button>
      <p className='mt-3'>If don't have an Account <Link to='/signup' className='font-semibold text-amber-800 hover:underline' >Signup </Link> </p>
    </Box>
  );
}

export default Signup
