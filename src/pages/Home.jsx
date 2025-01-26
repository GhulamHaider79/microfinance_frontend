import React, { useState } from 'react';
import Button from '../components/Button'
import LoanPage from './LoanPage';

function Home() {
  


  return (
    <div className="relative bg-[url('/images/tree-3335400_1280.jpg')] backdrop-blur-sm bg-cover bg-center min-h-screen">
      
      <div className="bg-slate-400 bg-opacity-0  flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white ">Welcome to the Saylani Microfinance System </h1>
      </div>
      <div className='flex justify-center mt-6'>
        <h3 className='text-black p-4 rounded-2xl text-2xl font-bold bg-slate-100'>Chose your Loan plan</h3>
      </div>

<div className=' flex justify-between mt-4 flex-wrap gap-10 p-6'>
<div className='w-[15rem] bg-slate-100 p-6 rounded-2xl flex flex-col  gap-1.5'>
         <h1 className='text-2xl font-bold'>Wedding Loans</h1>
         <p>Plan your dream wedding with ease through our Wedding Loans. Cover expenses like Valima, furniture, food, and Jahez with flexible repayment options up to 3 years</p>
         <Button
         type='button'
         >Proced</Button>
      </div>

      <div className='w-[15rem] bg-slate-100 p-6 rounded-2xl flex flex-col gap-1.5'>
         <h1 className='text-2xl font-bold'>Wedding Loans</h1>
         <p>Plan your dream wedding with ease through our Wedding Loans. Cover expenses like Valima, furniture, food, and Jahez with flexible repayment options up to 3 years</p>
         <Button
         type='button'
         >Proced</Button>
      </div>

      <div className='w-[15rem] bg-slate-100 p-6 rounded-2xl flex flex-col gap-1.5'>
         <h1 className='text-2xl font-bold'>Wedding Loans</h1>
         <p>Plan your dream wedding with ease through our Wedding Loans. Cover expenses like Valima, furniture, food, and Jahez with flexible repayment options up to 3 years</p>
         <Button
         type='button'
         >Proced</Button>
      </div>

      <div className='w-[15rem] bg-slate-100 p-6 rounded-2xl flex flex-col gap-1.5'>
         <h1 className='text-2xl font-bold'>Wedding Loans</h1>
         <p>Plan your dream wedding with ease through our Wedding Loans. Cover expenses like Valima, furniture, food, and Jahez with flexible repayment options up to 3 years</p>
         <Button
         type='button'
         >Proced</Button>
      </div>
</div>

<LoanPage />
    </div>
  );
}

export default Home;
