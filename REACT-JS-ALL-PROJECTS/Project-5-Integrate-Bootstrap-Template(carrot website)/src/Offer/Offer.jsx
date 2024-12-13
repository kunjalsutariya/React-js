import React from "react";
import './Offer.css'

const Offer = () => {
    return (
        <div className="OFFER">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex">
                        <div className="offer-banner me-4">
                            <img src="./img/offer1.jpg" alt="offer-banner" />
                            <div className="offerrcontant">
                                <h5>Healthy <br /> Bakery Products</h5>
                                <p><span>30%</span>Off on first order</p>
                                <a href="#"><button>Shop Now</button></a>
                            </div>
                        </div>
                        <div className="offer-banner me-4">
                            <img src="./img/offer2.jpg" alt="offer-banner" />
                            <div className="offerrcontant">
                                <h5>Fresh <br /> Snacks & Sweets</h5>
                                <p><span>20%</span>Off on first order</p>
                                <a href="#"><button>Shop Now</button></a>
                            </div>
                        </div>
                        <div className="offer-banner">
                            <img src="./img/offer3.jpg" alt="offer-banner" />
                            <div className="offerrcontant">
                                <h5>Fresh & Healthy <br /> Organic Fruits</h5>
                                <p><span>35%</span>Off on first order</p>
                                <a href="#"><button>Shop Now</button></a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Offer;