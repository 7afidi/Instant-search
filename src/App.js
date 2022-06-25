import './App.css';


import { useState } from 'react';
const App = () => {

  const [countries, setCountries] = useState([]);

  const search = async (q) => {
    const response = await fetch('http://localhost:8080?' + new URLSearchParams({ q }));
    const data = await response.json();
   console.log(data);
   setCountries(data);
  }

  return (

    <div className="container mx-auto">
      <h1 className='text-2xl	'> Search For Countries</h1>

      <div className='flex flex-col items-start mt-3'>
        <form>
          <input type="text" placeholder='Search here' onChange={(e) => {
            search(e.target.value);
          }} />
        </form>
        <ul>
          {countries.map((c)=>(
            <li key={c}>
              <strong>{c}</strong>
            </li>
          ))}
          {countries.length==0 && 'no countries found'}
        </ul>
        
      

      </div>


    </div>
  )
}

export default App;
