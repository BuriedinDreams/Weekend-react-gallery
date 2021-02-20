


function GalleryList( {galleryList} ) {

    return(
      <>
        {galleryList.map( photo => ( 
          <>
            <img src={photo.path}/>
            <p>key={photo.id}</p> 
            <p>key={photo.description}</p>
            <p>key={photo.likes}</p>
        
          </>
        ))}

          <ul>
            <li>RED</li>
            <li>Green</li>
            <li>Blue</li> 
          </ul>

        <p>STUFF</p>
    
    </>
  );
}



export default GalleryList;
