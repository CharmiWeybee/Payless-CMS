import React, { useEffect, useState } from "react";
import { httpHelper } from "./components/helpers/httpHelper";
import Sidebar from "./components/sidebar";

const viewOffers = () => {
  const [offers, setOffers] = useState(null);

  const url = "http://localhost:8000/offers";
  const api = httpHelper();

  useEffect(() => {
    getOffers();
  }, []);

  const getOffers = () => {
    api
      .get(`${url}`)
      .then((res) => {
        setOffers(res);
      })
      .catch((err) => console.log(err));
  };
  console.log(offers);

  return (
    <>
      <Sidebar />
      <main className="main">
        <section className="container">
        <div className="rest-header">
            <div className="heading w-100"> Coupons/Offers</div>
            <div className="btn-container">
              <button className="btn global-btn"><a href="/addOffersForm">Add Offers</a></button>
            </div>
        </div>
        
          <div>
            <table className="table table-bordered text-center pt-5">
              <thead>
                <tr>
                  <th>Offer Name</th>
                  <th>Price</th>
                  <th>Discount(%)</th>
                </tr>
              </thead>
              <tbody>
                {offers && offers.map((offer) =>
               { 
                return(
                <tr>
                  <td>{offer.name}</td>
                  <td>{offer.original_price}</td>
                  <td>{offer.discount}</td>
                </tr>
                )
              }
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
};
export default viewOffers;
