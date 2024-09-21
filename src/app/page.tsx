'use client'

import React, { useState } from 'react';

export default function Home() {

  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(100);
  const [annualReturnRate, setAnnualReturnRate] = useState<number>(12);
  const [investmentDuration, setInvestmentDuration] = useState<number>(5);
  const [maturityAmount, setMaturityAmount] = useState<number>(0);
  const [totalInvested, setTotalInvested] = useState<number>(0);
  const [totalReturns, setTotalReturns] = useState<number>(0);

  const handleCalculate = () => {
    const n = investmentDuration * 12;
    const r = annualReturnRate / 100 / 12;

    const totalInvestment = monthlyInvestment * n;
    const maturityValue : number  = monthlyInvestment * (((1 + r) ** n - 1) / r) * (1 + r);
    const returns = maturityValue - totalInvestment;

    setMaturityAmount(parseFloat(maturityValue.toFixed(2)));
    setTotalInvested(parseFloat(totalInvestment.toFixed(2)));
    setTotalReturns(parseFloat(returns.toFixed(2)));
  };



  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-5">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Poojitha Calculator</h1>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Monthly Investment (₹):</label>
          <input 
            type="number" 
            className="w-full p-2 border border-gray-300 rounded" 
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
            placeholder="Enter monthly amount"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Expected Annual Return Rate (%):</label>
          <input 
            type="number" 
            className="w-full p-2 border border-gray-300 rounded" 
            value={annualReturnRate}
            onChange={(e) => setAnnualReturnRate(Number(e.target.value))}
            placeholder="Enter return rate"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Investment Duration (Years):</label>
          <input 
            type="number" 
            className="w-full p-2 border border-gray-300 rounded" 
            value={investmentDuration}
            onChange={(e) => setInvestmentDuration(Number(e.target.value))}
            placeholder="Enter duration"
          />
        </div>

        <button 
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-500"
          onClick={handleCalculate}
        >
          Calculate
        </button>

        {maturityAmount > 0 && (
          <div className="mt-6 bg-gray-50 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Results:</h2>
            <p className="text-gray-700 mb-1">Total Investment: ₹{totalInvested}</p>
            <p className="text-gray-700 mb-1">Maturity Amount: ₹{maturityAmount}</p>
            <p className="text-gray-700">Total Returns: ₹{totalReturns}</p>
          </div>
        )}
      </div>
    </div>
  );
}
