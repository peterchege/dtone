import './App.css';
import { useState, useEffect } from 'react';

const API_URL = "https://api.isevenapi.xyz/api/iseven/";

function App() {

  const [counter, setCounter] = useState(2);
  const [baseNumber, setBaseNumber] = useState(2);

  const multiplyCounter = () => {
    setCounter( 2 * baseNumber);
    setBaseNumber(baseNumber + 1);
  
  }

  const squareRoot= () => {
    setCounter(Math.sqrt(counter));
  }

  useEffect(() => {
    checkEvenNo(counter);
  }, [counter]);

  const checkEvenNo = async (value) => { 
        const response = await fetch(`${API_URL}${value}`);
     const data = await response.json();
      console.log("My Response==>",data);
    }

  const colorGreen = "bg-green shadow-lg shadow-green rounded py-1";
  // const colorPurple = "bg-purple shadow-lg shadow-purple rounded py-1";
  // const colorRed = "bg-red shadow-lg shadow-red rounded py-1";

  return (
    <div>
      <h1 className="text-center my-6 font-bold text-2xl	">Lendtech Tech Challenge </h1>
      <div className="container   mx-auto py-10">
        <div className="flex flex-col w-1/3 mx-auto">
          <div className="flex flex-row font-semibold" >
            <p className="pr-4  text-2xl">Counter :</p>
            <p className={colorGreen}><span className="text-2xl px-4  text-white ">{counter}</span></p>
            
          </div>
          <div className="flex flex-row mt-7 mb-10">
            <input type="text" className="w-64 border-2 px-3 border-b-indigo-500 "/>
            <button type="button" className="rounded-lg w-32 bg-gray-500 text-white py-2 px-3 ml-5">submit</button>
          </div>
          <div className="flex flex-row mt-5">
            <button type="button" className="rounded-lg w-40 bg-blue-500 text-white py-2 px-3 mr-5" onClick={multiplyCounter}>Multiply</button>
            <button type="button" className="rounded-lg  w-40 bg-blue-500 text-white py-2 px-3 mx-5" onClick={squareRoot}>Square root</button>
          </div>
          <div className="flex flex-row mt-5">
            <button type="button" className="rounded-lg w-96 bg-gray-500 text-white py-2 px-3 mt-5" onClick={() => checkEvenNo(counter)}>Generate Random Number</button>
            </div>
          </div>
      </div>

   </div>
   
  );
}

export default App;
