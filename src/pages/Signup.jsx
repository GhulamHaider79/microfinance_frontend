import React, {useState} from "react";
import { Link } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Optional: global config
// axios.defaults.withCredentials = true;

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
  setLoading(true);
    if (!data.fullName || !data.email || !data.password || !data.cnic) {
      Swal.fire("All fields are required");
      return;
    }

    if (data.cnic.length !== 13 || data.cnic.length > 13) {
          Swal.fire("CNIC must be 13 digits long");
          return;
    }
    if (data.password.length < 6) {
          Swal.fire("Password must be at least 6 characters long");
          return;
    }

    try {

      const res = await axios.post(
        "https://microfinance-56ai.onrender.com/api/auth/register",
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }

      );
      setLoading(false);
      Swal.fire("Success", "User registered successfully", "success");
      console.log(res.data);
      navigate("/");

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
      className="bg-gray-400 p-6 rounded-lg shadow-md"
    >
      <h3 className="text-center font-bold">Register</h3>

      <img
        src="/user.png"
        alt="image"
        className="w-16 flex justify-self-center mt-3"
      />

      <TextField {...register("fullName")} label="Username" fullWidth margin="normal" />

      <TextField {...register("email")} label="Email" fullWidth margin="normal" />

      <TextField
        {...register("password")}
        label="Password"
        type="password"
        fullWidth
        margin="normal"
      />

      <TextField
        {...register("cnic")}
        label="CNIC"
        type="text"
        inputProps={{ maxLength: 13 }}
        fullWidth
        margin="normal"
      />
      {loading ? <span>Loading...</span> :<Button type="submit" variant="contained" fullWidth>
        Signup
      </Button>}

      

      <p className="mt-3">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-amber-800 hover:underline">
          Login
        </Link>
      </p>
    </Box>
  );
}

export default Signup;
