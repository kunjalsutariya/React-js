import React, { useState } from 'react';
import { app } from '../Firebase';
import './Header.css';
import { getDatabase, ref, set } from "Firebase/database";


function Header() {


  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(app)
    let id = Math.floor(Math.random() * 10000);
    set(ref(db, `users/${id}`), {
      name: name,
      phone: phone,
      message: message
    })
    alert("RECORD ADD")
    setName("")
    setPhone("")
    setMessage("")
    document.getElementById("closeModal").click();
  }


  return (
    <div>
      <header>
        <div className="container">
          <div className="row  pt-4">
            <div className="top-header d-flex">
              <div className='col-3'>
                <div className='logo'>
                  <a href="#"> <img src="/img/logo (1).png" alt="Logo" /></a>
                </div>
              </div>

              <div className='col-5 d-flex justify-content-end'>
                <form className="d-flex align-items-center serch-bar">
                  <input type="text" className='serch p-3' placeholder='Search For items...' />
                  <select className="form-select">
                    <option value="All Categories">All Categories</option>
                    <option value="Mens">Mens</option>
                    <option value="Womens">Womens</option>
                    <option value="Electronics">Electronics</option>
                  </select>
                  <a href="#" className="search-btn p-2">
                    <i className="fa-solid fa-magnifying-glass" />
                  </a>
                </form>
              </div>

              <div className='col-4 d-sm-none d-lg-flex align-items-center justify-content-end p-0'>
                <div className="menu">
                  <ul className="d-flex justify-content-end">
                    <li className="menu-item ">
                      <a href="#"><i className="fa-regular fa-user" />Account</a>
                      <ul className="dropdown">
                        <li><a href="#">Register</a></li>
                        <li><a href="#">Checkout</a></li>
                        <li><a href="#">Login</a></li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="#"><i className="fa-regular fa-heart" />Wishlist</a>
                    </li>
                    <li className="menu-item">
                      <a href="#"><i className="fa-solid fa-cart-shopping" />Cart</a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>



        <div className="container">
          <div className="row d-flex">
            <div className="togal d-flex align-items-center">

              <div className="col-sm-2 col-lg-1 col-xl-1">
                <div className="togal-button">
                  <a href="#"><i className="fa-solid fa-bars-staggered" /></a>
                </div>
              </div>

              <div className="col-7 col-lg-7 col-xl-6 d-sm-none d-lg-flex justify-content-end">
                <div className="MENU">
                  <ul className='d-flex'>
                    <li><a href="#">Home</a></li>
                    <li className="all-menu"><a href="#">Category<i className="fa-solid fa-chevron-down" /></a>
                      <ul className='dropdown'>
                        <li><a href="#">Shop Left sidebar</a></li>
                        <li><a href="#">Shop Right sidebar</a></li>
                        <li><a href="#">Full Width</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Products<i className="fa-solid fa-chevron-down" /></a>
                      <ul className='dropdown'>
                        <li><a href="#">product Left sidebar </a></li>
                        <li><a href="#">product Right sidebar </a></li>
                        <li><a href="#">product Full Width</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Pages<i className="fa-solid fa-chevron-down" /></a>
                      <ul className='dropdown'>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Cart</a></li>
                        <li><a href="#">Checkout</a></li>
                        <li><a href="#">Track Order</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">Faq</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                        <li><a href="#">Policy</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Blog<i className="fa-solid fa-chevron-down" /></a>
                      <ul className='dropdown'>
                        <li><a href="#">Left Sidebar</a></li>
                        <li><a href="#">Right Sidebar</a></li>
                        <li><a href="#">Full Width</a></li>
                        <li><a href="#">Detail Left Sidebar</a></li>
                        <li><a href="#">Detail Right Sidebar</a></li>
                        <li><a href="#">Detail Full Width</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Elements<i className="fa-solid fa-chevron-down" /></a>
                      <ul className='dropdown'>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Typography</a></li>
                        <li><a href="#">Buttons</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>







              <div className="col-3 col-xl-3 d-xl-flex d-sm-none justify-content-end">
                <div className="contact">
                  <ul className="d-flex justify-content-end">
                    <li>
                      <button
                        type="button"
                        className="btn btn-success rounded-circle p-3 shadow"
                        style={{ backgroundColor: "#4CAF50", border: "none" }}
                        data-bs-toggle="modal"
                        data-bs-target="#contactModal"
                      >
                        <i className="fa-solid fa-phone text-light fs-5"></i>
                      </button>
                      <div
                        className="modal fade"
                        id="contactModal"
                        tabIndex="-1"
                        aria-labelledby="contactModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content shadow">
                            <div className="modal-header bg-success text-light">
                              <h5 className="modal-title" id="contactModalLabel">
                                Contact Us
                              </h5>
                              <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <form onSubmit={handleSubmit}>
                              <div className="modal-body">
                                <div className="mb-3">
                                  <label htmlFor="recipient-name" className="form-label">
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control border border-success shadow-none"
                                  
                                    id="recipient-name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                    required
                                  />
                                </div>
                               
                                <div className="mb-3">
                                  <label htmlFor="recipient-phone" className="form-label">
                                    Phone
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control border border-success shadow-none"
                                    id="recipient-phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Enter your phone number"
                                    required
                                  />
                                </div>
                                <div className="mb-3">
                                  <label htmlFor="message-text" className="form-label">
                                    Message
                                  </label>
                                  <textarea
                                    className="form-control border border-success shadow-none"
                                    id="message-text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Write your message"
                                    rows="4"
                                    required
                                  ></textarea>
                                </div>
                              </div>
                              <div className="modal-footer d-flex justify-content-end">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button type="submit" className="btn btn-success">
                                  Submit
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>






              <div className='col-sm-10 d-sm-flex d-lg-none align-items-center justify-content-end p-0'>
                <div className="menu">
                  <ul className="d-flex justify-content-end">
                    <li className="menu-item  ">
                      <a href="#"><i className="fa-regular fa-user" /></a>
                      <ul className="dropdown">
                        <li><a href="#">Register</a></li>
                        <li><a href="#">Checkout</a></li>
                        <li><a href="#">Login</a></li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="#"><i className="fa-regular fa-heart" /></a>
                    </li>
                    <li className="menu-item">
                      <a href="#"><i className="fa-solid fa-cart-shopping" /></a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

      </header>
    </div>
  );
}

export default Header;












