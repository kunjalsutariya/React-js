import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      setProducts(data.products);
      console.log(data.products);

    } catch (err) {
      console.error(err);
      setError("Failed to fetch products.");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">Our Exclusive Products (Fatch-Mathod)</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map((val) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={val.id}>
              <div className="card product-card h-100">
                <img
                  src={val.thumbnail}
                  className="card-img-top img-fluid product-img"
                  alt={val.title}
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{val.title}</h5>
                  <p className="card-text text-truncate">{val.description}</p>
                  <h6 className="text-muted">Price: ${val.price}</h6>
                  <div className="mb-3">
                    {val.tags.map((tag, index) => (
                      <span key={index} className="badge bg-secondary me-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    className="btn btn-primary w-100"
                    data-bs-toggle="collapse"
                    data-bs-target={`#productDetails${val.id}`}
                    aria-expanded="false"
                    aria-controls={`productDetails${val.id}`}
                  >
                    View Details
                  </button>
                 
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>

  );
}

export default App;
