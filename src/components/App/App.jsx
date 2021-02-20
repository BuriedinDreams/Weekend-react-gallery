import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
// make import for gallerydata



function App() {

  const [galleryList, setGalleryList] = useState([]);


  useEffect(() => {
    getGalleryList();
  }, []);


  const getGalleryList = () => {
    
      axios({
        method: 'GET',
        url: '/gallery'
      })
      .then(response => {
        console.log(response.data, "res data")
        setGalleryList(response.data)
      })
      .catch((error) => {
        console.log('error in GET', error);
      });
  };



  console.log('GalleryList', galleryList);

    return (
      
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p> 
        <GalleryList
          galleryList={galleryList}
        />
        
      </div>
    );

};
export default App;
