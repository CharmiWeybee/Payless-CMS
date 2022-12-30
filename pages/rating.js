import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { httpHelper } from './components/helpers/httpHelper';
import Sidebar from './components/sidebar'

 const rating = () => {

    const [ratings, setRatings] = useState(" ")
    const url = "http://localhost:8000/ratings";
    const api = httpHelper();

    const getRatings=()=>{
        axios
        .get(`${url}`)
        .then((res) => {
          setRatings(res);
        })
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        getRatings()
    }, [])
    console.log(ratings)



  return (
    <>
    <Sidebar />
    <div className='main'>
        <section className="container-fluid rating-cont">
        <div className="mt-5 mb-3">
    <div className="row">
        {ratings && ratings.data && ratings.data.map((rating, index)=>{
                    return(<div className="col-md-4">
                    <div className="card-rating p-3 mb-2">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                                <div className="icon">
                                    <img className='profile-img' src={rating.user_profile}></img>
                                    </div>
                                <div className="ms-2 c-details">
                                    <h6 className="mb-0">{rating.user_name}</h6> <span>{rating.duration} days ago</span>
                                </div>
                            </div>
                            <div className="badge"> <span>{rating.rating}</span> </div>
                        </div>
                        <hr></hr>
                        <div className="mt-5">
                            <p>{rating.review}</p>
                        </div>
                    </div>
                </div>)
        })}
    </div>
</div>
      </section>
      </div>
    </>
  )
}
export default rating
