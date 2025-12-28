import React, { useState } from 'react';

import { useForm } from "react-hook-form";
import { TextField, Button, Box } from '@mui/material';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function UpdateBorrowerInfo() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    if (
      data.fullName.trim() === "" ||
      data.phoneNumber.trim() === "" ||
      data.address.trim() === "" ||
      data.cnic.trim() === "" ||
      data.city.trim() === "" ||
      data.country.trim() === "" ||
      statement.trim() === "" ||
      salarySheet.trim() === ""
    ) {
      Swal.fire("All fields are required");
      return;
    }

    console.log(data);
    try {
      setLoading(true);
      const res = await axios.post(
        "https://microfinance-56ai.onrender.com/api/loan/guarantor",
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
      navigate("/guarantor");

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
    <div>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: 500, margin: "auto", mt: 5 }}
        className='bg-gray-400 p-6 rounded-lg shadow-md '>
        <h3 className='text-center font-bold'>Update Information Please</h3>

        <TextField
          {...register("fullName")}
          label="Borrower Name"
          fullWidth margin="normal"
        />
        <TextField
          {...register("phoneNumber")}
          label="Borrower Phone Number"
          type='number'
          fullWidth margin="normal"
        />
        <TextField
          {...register("address")}
          label="Borrower Address"
          fullWidth margin="normal"
        />
        <TextField
          {...register("cnic")}
          label="Borrower CNIC No"
          type="number"
          fullWidth margin="normal"
        />
        <TextField
          {...register("city")}
          label="Borrower City"
          fullWidth margin="normal"
        />
        <TextField
          {...register("country")}
          label="Borrower Country"
          fullWidth margin="normal"
        />
        <TextField
          {...register("statement")}
          type="file"
          label="Upload Bank Statement"
          InputLabelProps={{ shrink: true }}
        fullWidth margin="normal"
         />
        <TextField
          {...register("salarySheet")}
          label="Upload Salary Sheet"
          InputLabelProps={{ shrink: true }}
          type='file'
          fullWidth margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
        >
          {loading ? "Loading..." : "Submit"}
        </Button>

      </Box>
    </div>
  );
}

export default UpdateBorrowerInfo
