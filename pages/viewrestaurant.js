import React, { useEffect, useState } from "react";
import { httpHelper } from "./components/helpers/httpHelper";
import Sidebar from "./components/sidebar";

const viewOffers = () => {
  const [restaurants, setRestaurants] = useState(null);
  const [reviews, setReviews] = useState([]);

  const url = "http://localhost:8000/restaurants";
  const api = httpHelper();

  useEffect(() => {
    getrestaurants();
  }, []);

  const getrestaurants = () => {
    api
      .get(`${url}`)
      .then((res) => {
        setRestaurants(res);
      })
      .catch((err) => console.log(err));
  };
  console.log(restaurants, "restaurants")


  // ---------------------------------------------------------------------------------
  // useEffect(() => {
  //   if (restaurants && restaurants.length > 0) {
  //     if (restaurants) {
  //       handleAdd(restaurants.map((review) => review.review)
        
  //       );
  //       console.log(review)
  //     }
  //   }
  // }, [restaurants]);
  // ---------------------------------------------------------------------------------

  return (
    <>
      <Sidebar />
      <main className="main">
        <section className="container">
          <div className="rest-header">
            <div className="heading w-100"> Coupons/Offers</div>
            <div className="btn-container">
              <button className="btn global-btn-border">
                <a href="/addRestaurantForm"> Add Restaurant</a>
              </button>
            </div>
          </div>

          <div>
            <table className="table table-bordered text-center pt-5">
              <thead>
                <tr>
                  <th>Restaurant Name</th>
                  <th>Address</th>
                  <th>Image</th>
                  <th>Rating</th>
                  {/* <th>Toxicity Count</th> */}
                </tr>
              </thead>
              <tbody>
                {restaurants &&
                  restaurants.map((restaurant) => {
                    return (
                      <tr>
                        <td>{restaurant.restaunt_name}</td>
                        <td>{restaurant.address}</td>
                        <td><img src={restaurant.img}></img></td>
                        <td>{restaurant.rating}</td>
                        {/* <td>{restaurant.restaurant_review}</td> */}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
};
export default viewOffers;
