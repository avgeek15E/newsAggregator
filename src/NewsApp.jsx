
import React, { useState, useEffect } from 'react'

import Cards from './Cards'
import './App.css'

const NewsApp = () => {

    const [search, setSearch] = useState("world");
    const [newsData, setNewsData] = useState(null);
    const API_KEY = import.meta.env.VITE_NEWSAPI;

    const getData = async (query) => {
        const searchCust = query || search
        const responce = await fetch(`https://newsapi.org/v2/everything?q=${searchCust}&apiKey=${API_KEY}`);
        const jsonData = await responce.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles);
    }

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            getData()
        }
    }

    const handleCategoryClick = (cat) => {
        getData(cat);
    }

    const categories = [
        "Sports",
        "Politics",
        "Geopolitics",
        "Health",
        "Business",
        "World Affairs",
        "Technology",
        "Space"
    ]

    useEffect(() => {
        getData();
    }, []);


  return (
      <div>
          <nav>
              <div>
                  <h1>Trendy News</h1>
              </div>
              <ul>
                  <li><a href="#">All News</a></li>
                  <li><a href="#">Trending</a></li>
              </ul>

              <div className='searchBar'>
                  <input type="text" placeholder='Search News' onChange={handleInput} onKeyDown={handleKeyDown}/>
                  <button onClick={getData}>Search</button>
              </div>
          </nav>

          <div>
              <p className='head'>Stay update with trendy news</p>
          </div>

          <div className="categoryBtn">
                {categories.map((cat) => (
                    <button key={cat} onClick={() => handleCategoryClick(cat)}>
                        {cat.toUpperCase()}
                    </button>
                ))}
            </div>

          <div>
              {newsData ? <Cards data={newsData}/> : null}
          </div>
    </div>
  )
}

export default NewsApp