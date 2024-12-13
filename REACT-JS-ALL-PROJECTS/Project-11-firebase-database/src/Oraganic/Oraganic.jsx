import React from "react";
import './Oraganic.css'
const Oraganic = () => {
    return (
        <div className="oraganics">
            <div className="deal-banner">
                <div className="deal-banner-img  position-absolute">
                    <img src="./img/bg-deal.jpg" alt="deal" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="deal-card p-4">
                                <div className="deal-contant">
                                    <h4>35% <span>OFF</span></h4>
                                    <h2>Great deal on organic food.</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis.</p>

                                    <div>
                                        <div className="counter-inner d-flex">
                                            <h4><span>77 : </span>Days</h4>
                                            <h4><span>00 :</span>Hrs</h4>
                                            <h4><span>21  :</span>min</h4>
                                            <h4><span>30 </span>Sec</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}
export default Oraganic;
