import React from "react";
import './Team.css'

const Team = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                    
                        <h2 className="fw-bold">Popular Products</h2>
                        <p className="text-black-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br>incididunt ut labore lacus vel facilisis.</p>
                    </div>
                    <div className="col-4">
                        <div className="team-card">
                            <div className="teamimg">
                                <img src="./img/team1.jpg" alt="" />
                            </div>
                            <span>Co Founder</span>
                            <h4>Stephen Smith</h4>
                            <p>“eiusmpsu dolor sit amet, conse cte tur <br /> ng elit, sed do eiusmod tem lacus vel <br></br>
                                facilisis.”
                            </p>
                            <div className="star">
                                <i class="fa-solid fa-star me-1"></i>
                                <i class="fa-solid fa-star me-1"></i>
                                <i class="fa-solid fa-star me-1"></i>
                                <i class="fa-solid fa-star me-1"></i>
                                <i class="fa-solid fa-star me-1"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="team-card">
                        <div className="teamimg">
                                <img src="./img/team2.jpg" alt="" />
                            </div>
                            <span>Manager</span>
                            <h4>Lorem Robinson</h4>
                            <p>“eiusmpsu dolor sit amet, conse cte tur <br /> ng elit, sed do eiusmod tem lacus vel <br></br>
                                facilisis.”
                            </p>
                            <div className="star">
                                <i class="fa-solid fa-star me-1"></i>
                                <i class="fa-solid fa-star me-1"></i>
                                <i class="fa-solid fa-star me-1"></i>
                                <i class="fa-solid fa-star me-1"></i>
                                <i class="fa-solid fa-star me-1"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="team-card">
                        <div className="teamimg">
                                <img src="./img/team3.jpg" alt="" />
                            </div>
                            <span>Team Leader</span>
                            <h4>Saddika Alard</h4>
                            <p>“eiusmpsu dolor sit amet, conse cte tur <br /> ng elit, sed do eiusmod tem lacus vel <br></br>
                                facilisis.”
                            </p>
                            <div className="star">
                                <i class="fa-solid fa-star me-1"></i>
                                <i class="fa-solid fa-star me-1"></i>
                                <i class="fa-solid fa-star me-1"></i>
                                <i class="fa-solid fa-star me-1"></i>
                                <i class="fa-solid fa-star me-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Team;
