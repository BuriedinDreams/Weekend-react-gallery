
import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList( {galleryList}  ) {

    return(
      <>
        {galleryList.map( photo => ( 
          <>
             
              <GalleryItem
                key={photo.id} // this is linking the gallery.data.js item to GalleryItem.
                photo={photo}

              />        
          </>
        ))}
    </>
  );
}



export default GalleryList;
