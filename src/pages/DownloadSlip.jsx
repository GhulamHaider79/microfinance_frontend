import React from 'react'

function DownloadSlip() {
    const downloadSlip = async () => {
  const res = await axios.get(
    `https://yourapi.com/api/loan/download-slip/${loanId}`,
    {
      responseType: "blob",
      withCredentials: true,
    }
  );

  const blob = new Blob([res.data], { type: "application/pdf" });
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "loan-slip.pdf";
  link.click();
};

  return (
    <div>
      <button onClick={downloadSlip}>
  Download Loan Slip
</button>

    </div>
  )
}

export default DownloadSlip
