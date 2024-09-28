import React from "react";
import "./Product.css";

const Product = ({ category, item, categoryButtonClick, filterdata }) => {
    return (
        <div className="product-container">
            <div className="category my-3">
                {category.map((cat) => {
                    const { id, name } = cat;
                    return (
                        <button key={id} onClick={() => categoryButtonClick(cat.name)}
                            className="category-button">
                            {name}
                        </button>
                    );
                })}
            </div>


            <div className="item mt-4 ">
                <div className="row justify-content-center">
                    {filterdata.length !== 0 ? (
                        filterdata.map((pr) => (
                            <div key={pr.id} className="col-md-3 d-flex card product-card">
                                <img
                                    src={pr.image}
                                    alt={pr.name}
                                    className="card-img-top product-image"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{pr.name}</h5>
                                    <p className="card-text">${pr.price}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        item.map((pr) => (
                            <div key={pr.id} className="col-md-3 d-flex card product-card">
                                <img
                                    src={pr.image}
                                    alt={pr.name}
                                    className="card-img-top product-image"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{pr.name}</h5>
                                    <p className="card-text">${pr.price}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;
