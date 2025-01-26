import React from 'react';
import { useForm } from "react-hook-form";
import { TextField, Button, Box } from '@mui/material';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: 300, margin: "auto", mt: 5 }}>
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
        Login
      </Button>
    </Box>
  );
};

export default Login;
