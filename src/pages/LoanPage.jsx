import React, { useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import Swal from 'sweetalert2'
import RegistrationPage from '../components/RegistrationPage'

function LoanPage() {
  const [category, setCategory] = useState("Wedding Loans");
   const [subcategory, setSubCategory] = useState("Valima");
  const [loanAmount, setLoanAmount] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");
  const [loanPeriod, setLoanPeriod] = useState(1);
  const [error, setError] = useState("");

  // Data for categories
  const categoryData = {
    "Wedding Loans": {
      subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
      maxLoan: 500000, // PKR 5 Lakh
      loanPeriod: "3 years",
    },
    "Home Construction Loans": {
      subcategories: ["Structure", "Finishing", "Loan"],
      maxLoan: 1000000, // PKR 10 Lakh
      loanPeriod: "5 years",
    },
    "Business Startup Loans": {
      subcategories: [
        "Buy Stall",
        "Advance Rent for Shop",
        "Shop Assets",
        "Shop Machinery",
      ],
      maxLoan: 1000000, // PKR 10 Lakh
      loanPeriod: "5 years",
    },
    "Education Loans": {
      subcategories: ["University Fees", "Child Fees Loan"],
      maxLoan: Infinity, // No limit
      loanPeriod: "4 years",
    },
  };

  // Handle Loan Amount Change
  const handleLoanAmountChange = (e) => {
    const inputAmount = parseInt(e.target.value || 0, 10);
    const maxAllowed = categoryData[category].maxLoan;

    if (inputAmount > maxAllowed) {
      setError(`Loan amount cannot exceed PKR ${maxAllowed.toLocaleString()}`);
    } else {
      setError("");
    }

    setLoanAmount(inputAmount);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
     const loanData = {
    category,
    subcategory,
    loanAmount,
    loanPeriod,
    initialDeposit,
  };
  try {
    const response = await axios.post(
      "https://microfinance-56ai.onrender.com/loan/create",
      loanData
    );

    console.log("Loan submitted:", response.data);
    alert("Loan application submitted successfully!");

  } catch (error) {
    console.error("Error submitting loan:", error);
    alert("Failed to submit loan application");
  }

    // https://microfinance-56ai.onrender.com/
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <form onSubmit={handelSubmit}>
        {/* Category Selection */}
        <div className="flex flex-col mb-4">
          <label htmlFor="categories" className="font-medium mb-1">
            Choose Category
          </label>
          <select
            className="bg-slate-50 w-full p-2 border rounded"
            id="categories"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setLoanAmount(""); // Reset loan amount when category changes
              setError("");
            }}
          >
            {Object.keys(categoryData).map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory Selection */}
        <div className="flex flex-col mb-4">
          <label htmlFor="subcategories" className="font-medium mb-1">
            Choose Subcategory
          </label>
          <select className="bg-slate-50 w-full p-2 border rounded" id="subcategories">
            {categoryData[category].subcategories.map((subcategory, index) => (
              <option key={index} value={subcategory} setSubCategory={subcategory}>
                {subcategory}
              </option>
            ))}
          </select>
        </div>

        {/* Loan Amount */}
        <div className="flex flex-col mb-4">
          <label htmlFor="loanAmount" className="font-medium mb-1">
            Enter Loan Amount (Max: PKR {categoryData[category].maxLoan.toLocaleString()})
          </label>
          <input
            type="number"
            id="loanAmount"
            className="bg-slate-50 w-full p-2 border rounded"
            placeholder="Enter desired loan amount"
            value={loanAmount}
            onChange={handleLoanAmountChange}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

        {/* Loan Period */}
        <div className="flex flex-col mb-4">
          <label htmlFor="loanPeriod" className="font-medium mb-1">
            Choose Loan Period (1 to 3 Years)
          </label>
          <select
            className="bg-slate-50 w-full p-2 border rounded"
            id="loanPeriod"
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(e.target.value)}
          >
            <option value={1}>1 Year</option>
            <option value={2}>2 Years</option>
            <option value={3}>3 Years</option>
          </select>
        </div>

       <div className="flex flex-col mb-4">
       <label htmlFor="initialDeposit" className="font-medium mb-1">
        Initial Deposit
          </label>
       <input 
       type="text" 
       id="initialDeposit"  
       className="bg-slate-50 w-full p-2 border rounded"
       onChange={(e) => setInitialDeposit(e.target.value)}
       />
       </div>

      <Button type="submit">
       Proced
      </Button>
      </form>
    </div>
  );
}

export default LoanPage;
