import axios from 'axios';
import React, {useState} from 'react'
import { useLoan } from "../context/LoanContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function DownloadSlip() {
  const { loan, } = useLoan();
  const [loading, setLoading] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const navigate = useNavigate();

  const downloadSlip = async () => {
    try {
      setLoadingState(true);
      const res = await axios.get(
        `https://microfinance-56ai.onrender.com/api/loan/download-slip/${loan._id}`, // Ensure URL is correct
        {
          responseType: "blob", // REQUIRED for PDF
          withCredentials: true,
        }
      );

      // Create a blob from the response data
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;

      // Use the ID or a name for the file
      link.setAttribute("download", `loan-slip-${loan._id}.pdf`);
      document.body.appendChild(link);
      link.click();

      // Cleanup
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
      setLoadingState(false);
    } catch (error) {
      console.error(error);
           setLoadingState(false);
           Swal.fire(
             "Error",
             error.response?.data?.message || "Something went wrong",
             "error"
           );
    }
  };

  const deleteApplication = async () => {
    try {
      setLoading(true);
      const res = await axios.delete(
        `https://microfinance-56ai.onrender.com/api/loan/delete-loan/${loan._id}`,
        {
          withCredentials: true,
        }
      );
      setLoading(false);
      console.log("Application deleted successfully", res.data);
      navigate("/");
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
      <div className='flex flex-col justify-center items-center '>
        <div className='flex flex-col justify-center items-center'>
          <div className='border-2 border-gray-300 p-6 rounded-lg shadow-md w-96 mb-6 bg-white'>
            <h2 className='text-2xl font-bold mb-6 border-b pb-2 text-gray-800'>Loan Details</h2>

            <div className='space-y-4'>
              {/* Category */}
              <div>
                <label className='text-sm font-semibold text-gray-500 uppercase tracking-wider'>Category</label>
                <h3 className='text-lg font-medium text-gray-800'>{loan?.category || 'N/A'}</h3>
              </div>

              {/* Initial Deposit */}
              <div>
                <label className='text-sm font-semibold text-gray-500 uppercase tracking-wider'>Initial Deposit</label>
                <h3 className='text-lg font-medium text-gray-800'>Rs. {loan?.initialDeposit?.toLocaleString()}</h3>
              </div>

              {/* Loan Amount */}
              <div>
                <label className='text-sm font-semibold text-gray-500 uppercase tracking-wider'>Total Loan Amount</label>
                <h3 className='text-lg font-bold text-blue-600'>Rs. {loan?.loanAmount?.toLocaleString()}</h3>
              </div>

              {/* Loan Period */}
              <div>
                <label className='text-sm font-semibold text-gray-500 uppercase tracking-wider'>Loan Period</label>
                <h3 className='text-lg font-medium text-gray-800'>{loan?.loanPeriod} Months</h3>
              </div>
            </div>
          </div>
        </div>
        {/* Download Loan Slip Button */}
        {loadingState ? <div> <p className='flex justify-center border-2 border-gray-300 p-6 rounded-lg shadow-md w-96 mb-6' >
            Downloading....
          </p> </div> :<div>
          <button className='border-2 border-gray-300 p-6 rounded-lg shadow-md w-96 mb-6' onClick={downloadSlip}>
            Download Loan Slip
          </button>
        </div>}

        {loading ? <div>  <p className='flex justify-center border-2 border-red-500 text-red-500 p-6 rounded-lg shadow-md w-96 mb-6' >
            Deleting...
          </p></div> : 
        
        <div>
          <button className='border-2 border-red-500 text-red-500 p-6 rounded-lg shadow-md w-96 mb-6' onClick={deleteApplication}>
            Delete Application
          </button>
        </div>
}
      </div>
    </div>
  )
}

export default DownloadSlip
