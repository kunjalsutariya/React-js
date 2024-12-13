import React from "react";
import './Propuler.css'
const Propuler = () => {
    return (
        <div className="Propulerproducts">
            <div className="container">
                <div className="row">
                    <div className="col-7 ">
                        <div className="item-Card d-flex mb-4">
                            <div className="item-card me-4">
                                <div className="item-img">
                                    <img src="./img/item1.jpg" alt="item" />
                                </div>
                                <div className="item-contant text-center pt-4">
                                    <h3>Vegetables</h3>
                                    <div className="star">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>(4.5)</div>
                                    <p>Fresh organic villa farm lomon
                                        500gm pack</p>
                                    <h4>$120.25<span>$123.25</span></h4>

                                </div>
                            </div>

                            <div className="item-card me-4">
                                <div className="item-img">
                                    <div className="zoom-image-hover">
                                        <img src="./img/item3.jpg" alt="item" />
                                        {/* <img role="presentation" src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/1.jpg" className="zoomImg" alt="" /> */}
                                    </div>
                                </div>
                                <div className="item-contant text-center pt-4">
                                    <h3>Fruits</h3>
                                    <div className="star">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>(4.5)</div>
                                    <p>Fresh organic apple 1kg simla marming</p>
                                    <h4>$120.25<span>$123.25</span></h4>

                                </div>
                            </div>
                            <div className="item-card ">
                                <div className="item-img">
                                    <div className="zoom-image-hover">
                                        <img src="./img/item4.jpg" alt="item" />
                                        {/* <img role="presentation" src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/1.jpg" className="zoomImg" alt="" /> */}
                                    </div>
                                </div>
                                <div className="item-contant text-center pt-4">
                                    <h3>Bakery</h3>
                                    <div className="star">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>(4.5)</div>
                                    <p>Delicious white baked fresh bread and toast</p>
                                    <h4>$20<span>$22.10</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-5">
                        <div className="propuler-products">
                            <img src="./img/products-rightview.jpg" alt="propuler-banner" />
                            <div className="propuler-contant">
                                <h2>Organic & Healthy <br />
                                Vegetables</h2>
                                <h4>25% <span>OFF</span></h4>
                                <a href="#"><button>Shop Now</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Propuler;
