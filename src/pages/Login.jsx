import React, { useState } from "react";
import FormHeading from "../components/FormHeading";
import { useSelector, useDispatch } from "react-redux";
// import { logInAction } from "../redux/actions/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  const reduxData = useSelector(state=>state.USERS);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    const {email , password } = formData
    if (email && password) {
      console.log('form data' , email , password);
      console.log('redux data' , reduxData)
     if (reduxData.length){
      let AllUSERS  = reduxData.map((item)=>{
        return item.USERS.data
      })
      AllUSERS = AllUSERS.filter((item) => {return item.email === email && item.password === password})
      if (AllUSERS.length>0){
        toast.success('login success', AllUSERS.username)
        setTimeout(() => {
          navigate('/add_post')
        }, 1500);
      }
      else{
        toast('login error invalid credentials')
      }
     }
     else{
       toast('login error or invalid credentials')
     }
    }
    else{
      toast('all the fields are required');
    }
  }


  return (
    <div className="row mx-auto py-3">
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
      <div className="col-12 col-md-6 col-lg-5 mx-auto py-3">
          <FormHeading title="Welcome Back"/>
        <form action="" onSubmit={handleFormSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={handleInput}
              name="email"
              value={formData.email}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={handleInput}
              name="password"
              value={formData.password}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="btn btn-primary outline-dark btn-sm mt-4 w-100">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
