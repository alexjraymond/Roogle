import { useState } from 'react'
import './App.css'
import roogleLogo from './img/ROOGLE_LOGO_FINAL.png'
import { GoSearch } from "react-icons/go";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        < img src={roogleLogo} />

      </div>
      <div className='search-container'>
      <input type='search' id='searchBar'/>
      <label htmlFor="searchBar" className="search-button" onClick={() => setCount((count) => count + 1)}>
          <GoSearch />
        </label>
      </div>
      <div className="card">
          search is {count}
      </div>
</>
  )
}

export default App
