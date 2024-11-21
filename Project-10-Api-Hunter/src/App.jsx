import React, { useEffect, useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [products, setProducts] = useState([]); // Corrected variable name
  const [error, setError] = useState(null); // Fixed unused state

  const fetchProducts = async () => {
    try {
      const response = await Axios.get(
        "https://dummyjson.com/products"
      );
      setProducts(response.data.products); // Adjusted key based on API response
    } catch (err) {
      console.error(err);
      setError("Failed to fetch products.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Products</h1>
      {error && <p className="text-danger text-center">{error}</p>} {/* Error message */}
      <div className="row">
        {products.length > 0 ? (
          products.map((val) => (
            <div className="col-md-3 mb-4" key={val.id}>
              <div className="card h-100">
                <img
                  src={val.thumbnail}
                  className="card-img-top"
                  alt={val.title} 
                />
                <div className="card-body">
                  <h5 className="card-title">{val.id}</h5>
                  <h5 className="card-title">{val.title}</h5>
                  <p className="card-text text-truncate">{val.description}</p>
                  <h6>price:{val.price}</h6>
                  <h6>tags:{val.tags .join(' , ')}</h6>
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="collapse"
                    data-bs-target={`#productDetails${val.id}`}
                    aria-expanded="false"
                    aria-controls={`productDetails${val.id}`}
                  >
                    View Details
                  </button>
                  <div
                    className="collapse mt-3"
                    id={`productDetails${val.id}`}
                  >
                    <p className="card-text">
                      <strong>Brand:</strong> {val.brand}
                    </p>
                    <p className="card-text">
                      <strong>Price:</strong> ${val.price}
                    </p>
                    <p className="card-text">
                      <strong>Rating:</strong> {val.rating}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Loading products...</p>
        )}
      </div>
    </div>
  );
}

export default App;
