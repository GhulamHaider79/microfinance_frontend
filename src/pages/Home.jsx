import React, { useState } from 'react';
import Button from '../components/Button'
import LoanPage from './LoanPage';
import HeroSection from '../components/HeroSection'
import Card from '../components/Card';


function Home() {



  return (
    <div className=' bg-gray-500 '>
      
      <HeroSection />
      <div className=" min-h-screen w-full">

        <div >
          <div className="bg-slate-300 bg-opacity-0 h-20 flex items-center justify-center">
            <h1 className="text-2xl flex flex-col md:block md:text-3xl lg:text-4xl font-bold text-black "><span>Welcome to the Saylani</span> <span>Microfinance System</span> </h1>
          </div>


          <div className='mt-6'>
            <h3 className='text-black text-center m-auto hover:scale-90 w-[40%] p-4 rounded-2xl text-2xl font-bold bg-slate-300'>Chose Your Loan Plan</h3>


            <div className=' flex justify-center mt-4 flex-wrap gap-10 md:p-6'>

              <div >
                <Card

                  title="Wedding Loans"
                  description="Plan your dream wedding with ease through our Wedding Loans. Cover expenses like Valima, furniture, food, and Jahez with flexible repayment options up to 3 years"
                  btnTitle="Proceed"
                />
              </div>

              <div >
                <Card

                  title="Home Loans"
                  description="Plan your dream wedding with ease through our Home Construction Loans. Cover expenses like Valima, furniture, food, and Jahez with flexible repayment options up to 3 years"
                  btnTitle="Proceed"
                />
              </div>

              <div >
                <Card

                  title="Business Loans"
                  description="Plan your dream wedding with ease through our Home Construction Loans. Cover expenses like Valima, furniture, food, and Jahez with flexible repayment options up to 3 years"
                  btnTitle="Proceed"
                />
              </div>


            </div>

        

          </div>


        </div>
      </div>

    </div>
  );
}

export default Home;
