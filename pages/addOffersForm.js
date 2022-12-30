import axios from "axios";
import React, { useState } from "react";
import Sidebar from "./components/sidebar";

const addOffersForm = () => {

  const [name, setName] = useState("");
  const [restId, setRestId] = useState("");
  const [menuId, setMenuId] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [finalAmount, setFinalAmount] = useState("");


    const handleSubmit = event => {
        console.log('handleSubmit ran', name, restId, menuId, originalPrice, discount, finalAmount,event);
        event.preventDefault(); 
        setName(" ");
        setRestId(" ");
        setMenuId(" ");
        setOriginalPrice(" ");
        setDiscount('');
        setFinalAmount(" ");
        postUser()
      };

      const postUser = ()=>{
        axios
        .post('http://localhost:8000/offers', { name: name, restaurant_id:restId, menu_id:menuId, original_price:originalPrice, discount:discount, final_amount:finalAmount})
        .then((res) => getResturants())
        .catch((err) => console.log(err));
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
                value={name}
                name="name"
                placeholder="Name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Restaurant Id</label>
            <div className="col-sm-6">
            <input
                type="text"
                value={restId}
                name="restId"
                placeholder="Restaurant Id"
                onChange={(event) => setRestId(event.target.value)}
              />
            </div>
            
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Menu Id</label>
            <div className="col-sm-6">
            <input
                type="text"
                value={menuId}
                name="menuId"
                placeholder="Menu Id"
                onChange={(event) => setMenuId(event.target.value)}
              />
            </div>
            
          </div>  <div className="form-group row">
            <label className="col-sm-4 col-form-label">Original Price</label>
            <div className="col-sm-6">
            <input
                type="text"
                value={originalPrice}
                name="originalPrice"
                placeholder="OriginalPrice"
                onChange={(event) => setOriginalPrice(event.target.value)}
              />
            </div>
            
          </div>  <div className="form-group row">
            <label className="col-sm-4 col-form-label">Discount(%)</label>
            <div className="col-sm-6">
            <input
                type="text"
                value={discount}
                name="discount"
                placeholder="Discount(%)"
                onChange={(event) => setDiscount(event.target.value)}
              />
            </div>
            
          </div>  <div className="form-group row">
            <label className="col-sm-4 col-form-label">Final Amount</label>
            <div className="col-sm-6">
            <input
                type="text"
                value={finalAmount}
                name="finalAmount"
                placeholder="Final Amount"
                onChange={(event) => setFinalAmount(event.target.value)}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
              <button type="button" onClick={handleSubmit} className="global-btn mt-3">
                <a href="/viewOffers">Submit</a>
              </button>
          </div>
          </section>
        </section>
      </main>
    </>
  );
};
export default addOffersForm;
