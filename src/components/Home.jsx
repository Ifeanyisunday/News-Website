import React, { useState } from 'react'
import '../App.css'
import Navbar from './navbar/Navbar'
import NewsFeed from './newsFeed/NewsFeed'

const Home = () => {

  const [category, setCategory] = useState("general")

  return (
    <div className='app'>
          <Navbar setCategory={setCategory}/>
          <NewsFeed category={category}/>
    </div>
  )
}

export default Home