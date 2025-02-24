import React, { useState } from 'react'
import './Navbar.css'

export const Navbar = ({ setCategory }) => {

  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    setCategory(e.target.elements.search.value.trim())
  }


  return (
    <nav className='header'>
      <div className='logo'>
        <h4>RAPID-INFO</h4>
        <small>Rapid-info</small>
      </div>

      <ul className='category-list'>
        {categories.map((categoryName) => (
          <li key={categoryName} className="category-item
          " onClick={() => setCategory(categoryName)}>{categoryName}</li>
        ))}
      </ul>

      <div className='search-bar'>
        <form onSubmit={handleSearch}>
          <input type="text" name='search' placeholder='Search...' />
          <button type='submit'>Search</button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar