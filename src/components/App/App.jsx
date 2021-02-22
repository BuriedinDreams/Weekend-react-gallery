import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import GalleryItem from '../GalleryItem/GalleryItem'
import Button from '@material-ui/core/Button'



function App() {
// galleryList is the gallery.data info. | it's an array.
  const [ galleryList, setGalleryList ] = useState([]);
  const [likesCount, setLikesCount] = useState(0)


  useEffect(() => {
    getGalleryList();
  }, []);





  const getGalleryList = () => {
    
      axios({
        method: 'GET',
        url: '/gallery'
      })
      .then(response => {
        console.log("res data", response.data )
        setGalleryList(response.data) // this is making the galleryList the gallery.data"list"
      })
      .catch((error) => {
        console.log('error in GET', error);
      });
  };


  const updateLikes = (photoID) => {

    console.log('Inside the PUT ID', photoID);
    console.log('number of likes:', photoID.likes);
    axios({
      method: 'PUT',
      url: `/gallery/like/${photoID}`,
      likes: { photoID }

    })
    .then(response => {
      console.log("response data", response.data)
      getGalleryList()
      setLikesCount(response.data) // this is going to capture the likes button click and update the count by 1.
    })
    .catch((error) => {
      console.log('error in GET', error);
    });
  };
  


    return (
      
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p className="Title" > You may click on the photos to see a description of the photo. </p> 
      
        <GalleryList
          galleryList={galleryList}
          updateLikes={updateLikes}
        />

        
      </div>
    );

};
export default App;
