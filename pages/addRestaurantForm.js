import axios from "axios";
import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import { toast } from "react-toastify"
import { openToast } from "../pages/components/openToast"

const addRestaurantForm = () => {

  const [restaunt_name, setRestaunt_name] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = event => {
    event.preventDefault(); 
    setRestaunt_name(" ");
    setAddress(" ");
    setImage(" ");
    postRestaurant();
  };

  const postRestaurant = ()=>{
    axios
    .post('http://localhost:8000/restaurants', { restaunt_name: restaunt_name, address:address, img:image })
    .then((res) => getResturants())
    .catch((err) => console.log(err));
  }

  const onClick = () => {
    console.log("123")
    openToast('Model followed successfully', 'success');
  }


  return (
    <>
      <Sidebar />
      <main className="main">
        <section className="container">
          <div className="rest-header">
            <div className="heading w-100">Add Coupons/Offers</div>
          </div>
          <section className="container">
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">Name</label>
              <div className="col-sm-6">
                <input
                  type="text"
                  name="restaunt_name"
                  value={restaunt_name}
                  placeholder="Name"
                  onChange={(event) => setRestaunt_name(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">Address</label>
              <div className="col-sm-6">
                <input
                  type="textarea"
                  name="address"
                  value={address}
                  placeholder="Address"
                  onChange={(event) => setAddress(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">Image</label>
              <div className="col-sm-6">
                <input
                  type="text"
                  name="image"
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                onClick={handleSubmit}
                className="global-btn mt-3"
              >
                <a href="/viewOffers">Submit</a>
              </button>
            </div>
          </section>
      <button onClick={onClick}> Click Me</button>
        </section>
      </main>
    </>
  );
};
export default addRestaurantForm;
