import React, { useState, useEffect } from 'react';
import Card from '../Card/Card.jsx';
import './NewsApp.css'

const NewsApp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState([]);
    const API_KEY = 'b346c80c98cd4984a94fe43ef9dfdf43';

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        setNewsData(jsonData.articles);
    };

    useEffect(() => {
        getData();
    }, []); 

    const handleInput = (e) => {
        setSearch(e.target.value);
    }

    const userInput = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <nav>
                <div>
                    <h1>SnapPulse</h1>
                </div>
                <ul>
                    <li> <a href="">All News</a></li>
                    <li><a href="">Trending</a></li>
                </ul>
                <div className="searchBar">
                    <input type='text' placeholder='Search News' value={search} onChange={handleInput} />
                    <button onClick={getData}>Search</button>
                </div>
            </nav>
            <div>
                <p className='head'>Stay Update with TrendyNews</p>
            </div>
            <div className="categoryBtn">
                <button onClick={userInput} value="sports">Sports</button>
                <button onClick={userInput} value="politics">Politics</button>
                <button onClick={userInput} value="entertainment">Entertainment</button>
                <button onClick={userInput} value="health">Health</button>
                <button onClick={userInput} value="education">Education</button>
            </div>
            <div>
                <Card data={newsData} />
            </div>
        </div>
    );
};

export default NewsApp;

//b346c80c98cd4984a94fe43ef9dfdf43
//https://newsapi.org/v2/everything?q=tesla&from=2025-06-04&sortBy=publishedAt&apiKey=b346c80c98cd4984a94fe43ef9dfdf43