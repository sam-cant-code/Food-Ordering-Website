import React from 'react'
import { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {

    const [category, setCategory] = useState("all");

  return (
    <div className="home">
      <Header/>
      <div className="home-content">
        <div className="home-explore-section">
          <ExploreMenu category={category} setCategory={setCategory}/>
        </div>
        <div className="home-display-section">
          <FoodDisplay category={category}/>
        </div>
      </div>
    </div>
  )
}

export default Home