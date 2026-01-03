import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const LoanContext = createContext();

export const LoanProvider = ({ children }) => {
  const [loan, setLoan] = useState(null);
  const [loading, setLoading] = useState(true);
 

  const fetchMyLoan = async () => {
    try {
      const res = await axios.get(
        "https://microfinance-56ai.onrender.com/api/loan/my-loans",
        { withCredentials: true }
      );
   console.log(res);
   
      if (res.data.loans && res.data.loans.length > 0) {
        setLoan(res.data.loans[0]); // latest loan
      } else {
        setLoan(null);
      }
    } catch (error) {
      console.error("Loan fetch failed", error.message);
      setLoan(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyLoan();
  }, []);

  

  return (
    <LoanContext.Provider value={{ loan, loading, fetchMyLoan }}>
      {children}
    </LoanContext.Provider>
  );
};

export const useLoan = () => useContext(LoanContext);
