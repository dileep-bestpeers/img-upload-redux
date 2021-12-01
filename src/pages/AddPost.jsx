import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddPost() {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [AllImgs, setAllImgs] = useState([]);
  const [formimg, setFormImg] = useState(null);

  const handleSubmitImage = (e) => {
    e.preventDefault();
    const data = AllImgs.slice(1, AllImgs.length);
    const localStorageImages = JSON.parse(localStorage.getItem("ALLIMAGES"));
    if (formimg != null) {
        if (localStorageImages) {
            localStorageImages.push(data)
            localStorage.setItem("ALLIMAGES", JSON.stringify(localStorageImages))
          } else {
            localStorage.setItem("ALLIMAGES", JSON.stringify([data]))
          }
          toast.success('All images saved successfully')
    }
    else{
        toast.error('plz select some images')
    }
  };

  const fileCheck = (e) => {
    let img = e.target.files[0];
    setFormImg(URL.createObjectURL(img));
    // setAllImgs([...AllImgs, formimg]);
  };

  useEffect(() => {
    setAllImgs([...AllImgs, formimg]);
  }, [formimg]);

  return (
    <div className="container">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <form action="" onSubmit={handleSubmitImage}>
        <div class="my-3">
          <label htmlFor="formFileSm" class="form-label">
            Upload and share your moments with the world
          </label>
          <input
            class="form-control form-control-sm mt-2"
            id="formFileSm"
            type="file"
            onChange={(e) => {
              fileCheck(e);
            }}
          />

          <div className="my-2 row">
            {AllImgs.length > 0
              ? AllImgs.slice(1, AllImgs.length).map((e, index) => {
                  return (
                    <div key={index} className="col-4 col-lg-3 col-md-4">
                      <div className="card img_box">
                        <img src={e} className="card-img-top" alt="..." />
                        <div className="card-body justify-content-between d-flex">
                          <span>likes {likes}</span>
                          <span>comments {comments}</span>
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
          <button class="btn btn-primary w-100 btn-sm my-4"> Post </button>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
