import './App.css';

function App() {
  return (
    <div>
      <h1 className="text-center my-6 font-bold text-2xl	">Lendtech Tech Challenge </h1>
      <div className="container   mx-auto py-10">
        <div className="flex flex-col mx-auto">
          <div className="flex flex-row font-semibold" >
            <p className="pr-4  text-2xl">Counter :</p>
            <span className="text-2xl">40</span>
          </div>
          <div className="flex flex-row mt-7 mb-10">
            <input type="text" className="w-64 border-2 px-3 border-b-indigo-500 "/>
            <button type="button" className="rounded-lg w-32 bg-gray-500 text-white py-2 px-3 ml-5">submit</button>
          </div>
          <div className="flex flex-row mt-5">
            <button type="button" className="rounded-lg w-40 bg-blue-500 text-white py-2 px-3 mr-5">Multiply</button>
            <button type="button" className="rounded-lg  w-40 bg-blue-500 text-white py-2 px-3 mx-5">Square root</button>
          </div>
          <div className="flex flex-row mt-5">
            <button type="button" className="rounded-lg w-96 bg-gray-500 text-white py-2 px-3 mt-5">Generate Random Number</button>
            </div>
          </div>
      </div>

   </div>
   
  );
}

export default App;
