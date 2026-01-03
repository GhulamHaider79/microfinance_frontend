import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useForm, Controller, set } from "react-hook-form";
import { TextField, Button, Box, Autocomplete, } from '@mui/material';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLoan } from "../context/LoanContext";
import Swal from "sweetalert2";


const GuarantorForm = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      country: "Pakistan",
    },
  });
  const navigate = useNavigate();
  const { loan, } = useLoan();
  const [loading, setLoading] = useState(false);



   useEffect(() => {
       if (!loan) return;
   
       if (loan.stepCompleted === 1) {
         navigate("/update-borrower-info");
       } else if (loan.stepCompleted === 2) {
         navigate("/guarantor");
       }else if (loan.stepCompleted === 3) {
         navigate("/download-slip");
       }
     }, [loan, navigate]);

  const countries = [
    "Pakistan",
    "India",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Saudi Arabia",
    "UAE",
  ];




  const onSubmit = async (data) => {

    if (
      data.name.trim() === "" ||
      data.email.trim() === "" ||
      data.address.trim() === "" ||
      data.cnic.trim() === "" ||
      data.city.trim() === "" ||
      data.country.trim() === ""
    ) {
      Swal.fire("All fields are required");
      return;
    }
setLoading(true);
    console.log(data);
    try {
      
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
      navigate("/loanPage");

    } catch (error) {
      console.error(error);
      setLoading(false);
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
        className='bg-gray-400 p-6 rounded-lg shadow-md'>
        <h3 className='text-center font-bold'>Please Fill Guarantor Information</h3>

        <TextField
          {...register("name")}
          label="Guarantor Name"
          fullWidth margin="normal"
        />
        <TextField
          {...register("email")}
          label="Email"
          fullWidth margin="normal"
        />
        <TextField
          {...register("address")}
          label="Guarantor Address"
          fullWidth margin="normal"
        />
        <TextField
          {...register("cnic")}
          label="Guarantor CNIC No"
          type="number"
          fullWidth margin="normal"
        />
        <TextField
          {...register("city")}
          label="Guarantor City"
          fullWidth margin="normal"
        />
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Autocomplete
              options={countries}
              value={field.value || null}
              onChange={(e, value) => field.onChange(value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Guarantor Country"
                  margin="normal"
                  fullWidth
                />
              )}
            />
          )}
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
};

export default GuarantorForm;