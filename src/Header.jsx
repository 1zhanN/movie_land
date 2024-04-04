import React from 'react'

export default function Header({ searchTerm, setSearchTerm, SearchIcon, searchMovies }) {

    
  return (
    
    <div className="search">
    <input 
    placeholder="Search for Movies"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)} 
    />
    <img
    src={SearchIcon}
    alt="search"
    onClick={() => searchMovies(searchTerm)}
    />
</div>
  )
}

