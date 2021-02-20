import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
// import galleryItems from '../'



function App() {

  const [ galleryList, setGalleryList ] = useState([]);
  const [ galleryItems, setGalleryItems ] = useState('');


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



   // axios.put(`'/like/${itemId}', GalleryItem)
  //  const galleryItem = (event) => {
  //   const itemId = event.target.id;
  //   const description = event.target.description;
  //   const photoLikes = event.target.likes;
  //   console.log('PUT itemId', itemId );
  //   console.log('PUT description', description );
  //   console.log('PUT photoLikes', photoLikes );
  //   axios({
  //     url: `/list/${itemId}`,
  //     method: 'PUT',
  //     data: { galleryItem },
  //   })
  //     .then((response) => {
  //       console.log('Item updated', response);
  //       getShoppingList();
  //     })
  //     .catch((err) => {
  //       console.log('Unable to update galleryItem', err);
  //     });
  // };





  console.log('GalleryList', galleryList);

    return (
      
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here </p> 
        <GalleryList
          galleryList={galleryList}
        />

        
      </div>
    );

};
export default App;
