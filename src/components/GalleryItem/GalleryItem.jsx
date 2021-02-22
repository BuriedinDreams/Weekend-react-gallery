import { Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import './GalleryItem.css';

// the photo is being retrieved from gallerylist .map (photo)
// it's each individual item in the gallery.data.js

// need to have updateLikes 
function GalleryItem ( {photo, updateLikes} ) {
// const [Count , setCount ] = useState(0)
const [isClicked, setIsClicked] = useState(true)

// this is our toggle
  function itemClicked() { // this.val() | currently is true because isClicked is useState(true)  
    console.log('photo is clicked');
    console.log('photo description', photo.description);
    { isClicked
        ? setIsClicked(false) // this will switch image to photo description
        : setIsClicked(true)
    }
  }
 
  return(
    <div className="theWhole" >

      
      {isClicked // this is checking if it's true or false | we have default set it to true. 
        ? <img className="photo" onClick={itemClicked}  src={photo.path}/> 
        : <p className="description" onClick={itemClicked}>  {photo.description}</p>
      }
     
      <p className="likeSentence" > number of Likes {photo.likes} </p>
        {/* updateLikes (photo.id ) is grabbing the id. */}
        {/* updateLikes is running the function in app.jsx | which is a PUT. */}
      {/* <button className="likeBtn" onClick={ () => updateLikes(photo.id)  } > Likes Button </button>  */}
      <Button variant="outlined" color="secondary" className="likeBtn" onClick={ () => updateLikes(photo.id)  }  >
      Likes Button
      </Button>
      {/* wire button to updateLikes  */}

    </div>
  )

}

export default GalleryItem