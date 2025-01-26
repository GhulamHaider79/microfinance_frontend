import React, { useState } from "react";
import { TextField, Button, Box, Typography, Stack } from "@mui/material";
import Swal from 'sweetalert2'

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword){
    return  Swal.fire({
      title: 'Error!',
      text: 'password not match',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  }
    // Add your registration logic here
    console.log("Form Data Submitted: ", formData);


    setFormData({
      fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    })
  };

  return (
    <Box
      sx={{
        width: 400,
        mx: "auto",
        mt: 10,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "white",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
        Create an Account
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          {/* Full Name */}
          <TextField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            fullWidth
            required
          />
          {/* Email */}
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
          {/* Password */}
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
          />
          {/* Confirm Password */}
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            fullWidth
            required
          />
        </Stack>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
        >
          Register
        </Button>
      </form>
    </Box>
  );
};

export default RegistrationPage;
