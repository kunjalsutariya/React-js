import React from "react";
import './Items.css'

const Items = () => {
    return (
        <div className="productes">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="fw-bold">Popular Products</h2>
                        <p className="text-black-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br>incididunt ut labore lacus vel facilisis.</p>
                    </div>
                    <div className="col-12">

                        <div className="d-flex">

                            <div className="col-3 me-4">
                                <div className="item-tbl">
                                    <ul>
                                        <li className="mb-1"><button className="fw-bold"> All <br></br> <span><i class="fa-solid fa-arrow-right"></i></span></button>

                                        </li>
                                        <li className="mb-1"><button className="fw-bold">Snack<br></br><span><i class="fa-solid fa-arrow-right"></i></span></button>

                                        </li>
                                        <li className="mb-1"><button className="fw-bold"> Vegetables <br></br><span><i class="fa-solid fa-arrow-right"></i></span></button>

                                        </li>
                                        <li className="mb-1"><button className="fw-bold"> Fruite <br></br><span><i class="fa-solid fa-arrow-right"></i></span></button>

                                        </li>
                                        <li className="mb-1"><button className="fw-bold"> Bakery <br></br><span><i class="fa-solid fa-arrow-right"></i></span></button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-banner">
                                    <img src="./img/product-banner.jpg" alt="product-banner" />
                                    <div className="bannercontant">
                                        <h2>Juicy</h2>
                                        <h1>FRUITS</h1>
                                        <p>100% Natural</p>
                                        <a href="#"><button>Shop Now</button></a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="col-12 ">
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
                                                    <img src="./img/item2.jpg" alt="item" />
                                                    {/* <img role="presentation" src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/1.jpg" className="zoomImg" alt="" /> */}
                                                </div>
                                            </div>
                                            <div className="item-contant text-center pt-4">
                                                <h3>Snacks</h3>
                                                <div className="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>(5.0)</div>
                                                <p>Best snakes with hazel nut pack 200gm</p>
                                                <h4>$145<span>$150</span></h4>

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

                                <div className="col-12 d-flex">
                                    <div className="item-card me-4">
                                        <div className="item-img">
                                            <div className="zoom-image-hover">
                                                <img src="./img/item5.jpg" alt="item" />
                                                {/* <img role="presentation" src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/1.jpg" className="zoomImg" alt="" /> */}
                                            </div>
                                        </div>
                                        <div className="item-contant text-center pt-4">
                                            <h3>Snacks</h3>
                                            <div className="star">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>(5.0)</div>
                                            <p>Sweet crunchy nut mix 250gm pack</p>
                                            <h4>$120.25<span>$123.25</span></h4>

                                        </div>
                                    </div>
                                    <div className="item-card me-4">
                                        <div className="item-img">
                                            <div className="zoom-image-hover">
                                                <img src="./img/item6.jpg" alt="item" />
                                                {/* <img role="presentation" src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/1.jpg" className="zoomImg" alt="" /> */}
                                            </div>
                                        </div>
                                        <div className="item-contant text-center pt-4">
                                            <h3>Vegetables</h3>
                                            <div className="star">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-regular fa-star"></i>
                                                <i class="fa-regular fa-star"></i>(3.2)</div>
                                            <p>Organic fresh venila farm watermelon 5kg</p>
                                            <h4>50.30<span>$75.60</span></h4>

                                        </div>
                                    </div>
                                    <div className="item-card me-4">
                                        <div className="item-img">
                                            <div className="zoom-image-hover">
                                                <img src="./img/item7.jpg" alt="item" />
                                                {/* <img role="presentation" src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/1.jpg" className="zoomImg" alt="" /> */}
                                            </div>
                                        </div>
                                        <div className="item-contant text-center pt-4">
                                            <h3>Snacks</h3>
                                            <div className="star">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>(5.0)</div>
                                            <p>Sweet crunchy nut mix 250gm pack </p>
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
                                            <h3>Vegetables</h3>
                                            <div className="star">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>(5.0)</div>
                                            <p>Delicious white baked fresh bread and toast</p>
                                            <h4>$20<span>$22.10</span></h4>

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
export default Items;
