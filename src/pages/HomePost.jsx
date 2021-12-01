import React, { useEffect, useState } from "react";


function HomePost() {
    const [likes, setLikes] = useState(0)
    const [comments, setComments] = useState(0)
    const [AllImages, setAllImages] = useState([])
    const img = "https://image.shutterstock.com/image-vector/picture-icon-260nw-323592404.jpg"

    const getAllImages = () =>{
        const localStorageImages = JSON.parse(localStorage.getItem("ALLIMAGES"));
        setAllImages(localStorageImages);
        console.log("all images is",AllImages);
    }

    useEffect(() => {
       getAllImages();
    }, [])

    const handleLikes = () =>{
        setLikes(likes+1)
    }



  return (
    <div className="container">
      <div className="row">
       {
           AllImages.length >0 ? 
           <div className="col-lg-3 col-md-4 col-sm-6 col-12">
           <div className="card">
             <img onClick={handleLikes} src={img} className="card-img-top" alt="..." />
             <div className="card-body justify-content-between d-flex">
                 <span>likes {likes}</span> 
                 <span>comments {comments}</span> 
             </div>
           </div>
         </div>
         :
         "nothing to show"
       }
      </div>
    </div>
  );
}

export default HomePost;
