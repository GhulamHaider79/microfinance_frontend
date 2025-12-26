import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField, Button, Box } from '@mui/material';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    if (data.emails === "" || data.password === "") {
      
      Swal.fire("All fields are required");
      return;
    }
    console.log(data);
    try {

      const res = await axios.post(
        "https://microfinance-56ai.onrender.com/api/auth/login",
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }

      );
      setLoading(false);
      Swal.fire("Success", "User logged in successfully", "success");
      console.log(res.data);
      console.log(res.data.cockie);
      navigate("/loanPage");

    } catch (error) {
      console.error(error);
      Swal.fire(
        "Error",
        error.response?.data?.message || "Something went wrong",
        "error"
      );
    }
   
  };

  return (
    <Box 
    component="form" 
    onSubmit={handleSubmit(onSubmit)} 
    sx={{ width: 300, margin: "auto", mt: 5 }}
    className='bg-gray-400 p-6 rounded-lg shadow-md'>
      <h3 className='text-center font-bold'>Login</h3>
      <img src="/user.png" alt="image" className='w-16 flex justify-self-center mt-3' />
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
      <Button 
      type="submit" 
      variant="contained" 
      fullWidth
      >
        {loading ? "Loading..." : "Login"}
      </Button>
      <p className='mt-3'>If don't have an Account <Link to='/signup' className='font-semibold text-amber-800 hover:underline' >Signup </Link> </p>
    </Box>
  );
};

export default Login;
