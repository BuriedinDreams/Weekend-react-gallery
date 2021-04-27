
import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList( {galleryList, updateLikes } ) {

    return(
      <>
        {galleryList.map( photo => ( 
          <div>
             
              <GalleryItem
                key={photo.id} // this is linking the gallery.data.js item to GalleryItem.
                photo={photo} // this is the individual item in my gallery.data
                updateLikes={updateLikes} // this is coming from App.jsx
              />        
          </div>
        ))}
    </>
  );
}



export default GalleryList;
