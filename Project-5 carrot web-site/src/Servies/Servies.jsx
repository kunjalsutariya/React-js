import React from "react";
import './Servies.css'

const Servies = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="card text-center">
                            <div className="card-icon">
                                <i class="fa-solid fa-boxes-packing"></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Product-Packing</h5>
                                <p className="card-text text-black-50">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

                            </div>
                        </div>

                    </div>
                    <div className="col-3">
                        <div className="card text-center">
                            <div className="card-icon">
                                <i class="fa-solid fa-headphones"></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">24X7 Support</h5>
                                <p className="card-text text-black-50">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

                            </div>
                        </div>

                    </div>
                    <div className="col-3">
                        <div className="card text-center">
                            <div className="card-icon">
                                <i class="fa-solid fa-truck"></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Delivery in 5 Days</h5>
                                <p className="card-text text-black-50">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

                            </div>
                        </div>

                    </div>
                    <div className="col-3">
                        <div className="card text-center">
                            <div className="card-icon">
                                <i class="fa-solid fa-money-check-dollar"></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Payment Secure</h5>
                                <p className="card-text text-black-50">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Servies;