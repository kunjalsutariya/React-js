import React from "react";
import './Banner.css'

const Banner = () => {
    return (

        <div>
                <div className="row align-item-center">
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active bannerimg" data-bs-interval={10000}>
                                <img src="./img/banner.jpg" className="d-block w-100 img-fluid" alt="banner" />
                                <div className="banner-contant">
                                <h5><span>100%</span> Organic Vegetables</h5>
                                <h1>The best way to stuff your wallet.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet <br /> reiciendis
                                beatae consequuntur.</p>
                                <a href="#"><button>Shop Now</button></a>
                               
                                <div className="sheapimg-2">
                                    <img src="./img/2.png" alt="sheap" />
                                </div>
                                <div className="sheapimg-3">
                                    <img src="./img/3.png" alt="sheap" />
                                </div>
                                <div className="sheapimg-4">
                                    <img src="./img/5.png" alt="sheap" />
                                </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval={2000}>
                                <img src="./img/banner-2.jpg" className="d-block w-100" alt="banner" />
                                <div className="banner-contant">
                                <h5><span>100%</span> Organic Vegetables</h5>
                                <h1>The best way to stuff your wallet.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet <br /> reiciendis
                                beatae consequuntur.</p>
                                <a href="#"><button>Shop Now</button></a>
                               
                                <div className="sheapimg-2">
                                    <img src="./img/2.png" alt="sheap" />
                                </div>
                                <div className="sheapimg-3">
                                    <img src="./img/3.png" alt="sheap" />
                                </div>
                                <div className="sheapimg-4">
                                    <img src="./img/5.png" alt="sheap" />
                                </div>
                                </div>
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
           
        </div>
    )
}
export default Banner;