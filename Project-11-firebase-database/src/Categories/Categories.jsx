import React from "react";
import './Categories.css'

const Categories = () => {
    return (
        <div className="categori">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="contant-categories">
                            <ul>
                                <li className="mb-1"><button> Cake & Milk <br></br> <span>(65 items)</span></button>

                                </li>
                                <li className="mb-1"><button>Fresh Meat<br></br><span>(65 items)</span></button>

                                </li>
                                <li className="mb-1"><button> Vegetables <br></br><span>(65 items)</span></button>

                                </li>
                                <li className="mb-1"><button> Apple & Mango <br></br><span>(65 items)</span></button>

                                </li>
                                <li className="mb-1"><button> Straberry <br></br><span>(65 items)</span></button>
                                </li>
                                <li className="mb-1"><button> View More</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-8 d-flex">
                        <div className="cate-img pe-4">
                            <img src="./img/cate-3.jpg" alt="cate" />
                           <div className="img-text">
                           <h2>Cake</h2>
                           <a href="#"><button>Shop Now</button></a>
                           </div>
                            </div>
                        <div className="cate-img">
                            <img src="./img/cate-4.jpg" alt="cate" />
                            <div className="img-text">
                           <h2>Milk</h2>
                           <a href="#"><button>Shop Now</button></a>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Categories;
