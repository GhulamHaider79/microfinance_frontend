import React, { useEffect, useState } from 'react';

import { useForm } from "react-hook-form";
import { TextField, Button, Box } from '@mui/material';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useLoan } from "../context/LoanContext";

function UpdateBorrowerInfo() {
  const { loan, loading } = useLoan();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [loadingState, setLoadingState] = useState(false);


  // 🔁 Auto navigation based on step
     useEffect(() => {
       if (!loan) return;
   
       if (loan.stepCompleted === 1) {
         navigate("/update-borrower-info");
       } else if (loan.stepCompleted === 2) {
         navigate("/guarantor");
       }
     }, [loan, navigate]);
  

  const onSubmit = async (data) => {

  // ✅ correct validation
  if (
    !data.fullName?.trim() ||
    !data.phoneNumber?.trim() ||
    !data.address?.trim() ||
    !data.cnic?.trim() ||
    !data.city?.trim() ||
    !data.country?.trim() ||
    !data.statement?.length ||
    !data.salarySheet?.length
  ) {
    Swal.fire("All fields are required");
    return;
  }

  try {
    setLoadingState(true);

    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("address", data.address);
    formData.append("cnic", data.cnic);
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("statement", data.statement[0]);     // 👈 IMPORTANT
    formData.append("salarySheet", data.salarySheet[0]); // 👈 IMPORTANT

    const res = await axios.put(
      "https://microfinance-56ai.onrender.com/api/loan/borrower-info",
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setLoadingState(false);
    Swal.fire("Success", "Borrower info updated", "success");
    navigate("/guarantor");

  } catch (error) {
    setLoadingState(false);

    const message =
      error.response?.data?.message || "Something went wrong";

    Swal.fire({
      icon: "error",
      title: "Error",
      text: message,
    });
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
          {loadingState ? "Loading..." : "Submit"}
        </Button>

      </Box>
    </div>
  );
}

export default UpdateBorrowerInfo
