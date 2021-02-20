
// the photo is being retrieved from gallerylist .map (photo)
// it's each individual item in the gallery.data.js


function GalleryItem ( {photo} ) {

  return(
    <>

      <img src={photo.path}/>
      <p>key={photo.id}</p> 
      <p>key={photo.description}</p>
      <p>key={photo.likes}</p>

    </>
  )

}

export default GalleryItem