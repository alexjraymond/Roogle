import './App.css'
import roogleLogo from './img/ROOGLE_LOGO_FINAL.png'
import { GoSearch } from "react-icons/go";

function App() {


  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchInput = document.getElementById('searchBar') as HTMLInputElement | null;
    if (searchInput && searchInput.value.trim()) {
      const searchQuery = searchInput.value.trim();
      const fullQuery = `${searchQuery} reddit`;
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(fullQuery)}`;
    } else {
      console.log('Please enter a search query.');
    }
  };


  return (
    <>
      <div className='logo-container'>
        < img src={roogleLogo} className='roogle-logo' />

      </div>
      <form onSubmit={handleFormSubmit}>
      <div className='search-container'>

      <input type='search' id='searchBar'/>
      <label htmlFor="searchBar" className="search-button">
          <GoSearch />
        </label>
      </div>
      </form>
</>
  )
}

export default App
