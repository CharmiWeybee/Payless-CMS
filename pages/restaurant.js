import Sidebar from "./components/sidebar";
import React, { useEffect, useState } from "react";
import { httpHelper } from "../pages/components/helpers/httpHelper";
import Form from "./components/Form";
import Viewrestaurant from "./viewrestaurant";

function restaurantForm() {
  const [restaurants, setRestaurants] = useState(null);

  const url = "http://localhost:8000/restaurants";
  const api = httpHelper();

  useEffect(() => {
    getResturants();
  }, []);

  const postRestaurant = (restaurant) => {
    api
      .post(`${url}`, { body: restaurant })
      .then((res) => getResturants())
      .catch((err) => console.log(err));
  };

  const getResturants = () => {
    api
      .get(`${url}`)
      .then((res) => {
        setRestaurants(res);
      })
      .catch((err) => console.log(err));
  };
  const updateRestaurant = (id, restaurant) => {
    api
      .put(`${url}/${id}`, { body: restaurant })
      .then((res) => getResturants())
      .catch((err) => console.log(err));
  };

  const deleteRestaurant = (id) => {
    api
      .del(`${url}/${id}`, {})
      .then((res) => getResturants())
      .catch((err) => console.log(err));
  };

  if (!restaurants) return null;

  return (
    <>
      <Sidebar />
      <main className="main">
        <section className="container">
          <div className="rest-header">
            <div className="heading w-100">New Restaurant</div>
          </div>
          <Form postRestaurant={postRestaurant} />
          <div className="header-container d-flex">
            <div className="heading w-100">All Restaurants</div>
            <div className="add-button">
              {/* <a href="/addRestaurantForm">
                <button className="global-btn-border">Add</button>
              </a> */}
            </div>
          </div>
            <Viewrestaurant
              restaurants={restaurants}
              setRestaurants={setRestaurants}
              postRestaurant={postRestaurant}
              updateRestaurant={updateRestaurant}
              deleteRestaurant={deleteRestaurant}
            />
        </section>
      </main>
    </>
  );
}
export default restaurantForm;
