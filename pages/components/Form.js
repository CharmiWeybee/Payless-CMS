import React, { useState } from "react";
import Sidebar from "./sidebar";

const Form = ({ restaurantData = {}, postRestaurant, updateRestaurant }) => {
  const [restaurant, setRestaurant] = useState({
    restaunt_name: restaurantData.restaunt_name ?? "",
    address: restaurantData.address ?? "",
    id: restaurantData.id ?? "",
  });

  const handleValue = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const submitRestaurant = (e) => {
    e.preventDefault();

    if (restaurantData.id) {
      updateRestaurant(restaurantData.id, restaurant);
    } else {
      (restaurant);
    }
  };
  return (
    <>
      <section className="container">
        <form className="form-main" onSubmit={submitRestaurant}>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Name</label>
            <div className="col-sm-6">
              <input
                type="text"
                name="restaunt_name"
                value={restaurant.restaunt_name}
                placeholder="Name"
                onChange={(e) => handleValue(e)}
              />
            </div>
          </div>
          <div className="form-group row border-bottom ">
            <label className="col-sm-4 col-form-label">Address</label>
            <div className="col-sm-6">
              <input
                type="textarea"
                name="address"
                value={restaurant.address}
                placeholder="Address"
                onChange={(e) => handleValue(e)}
              />
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">Image</label>
              <div className="col-sm-6">
                <input
                  type="text"
                  name="image"
                  value={restaurant.img}
                  onChange={(e) => handleValue(e)}
                />
              </div>
            </div>
          </div>

          <div className="form-group row p-4">
            <div className="text-center">
              <button type="submit" className="global-btn">
                <input
                  className="global-btn"
                  type="submit"
                  value={`${
                    !restaurantData.id ? "Add restaurant" : "Save restaurant"
                  }`}
                />
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;
