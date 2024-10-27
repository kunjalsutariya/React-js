import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const Edit = () => {
  const course = [
    "html",
    "css",
    "bootstrap",
    "js",
    "jquery",
    "react js",
    "node js",
    "php",
    "python",
    "ai",
    "ml",
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectcourse, setSelectCourse] = useState([]);
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("")
  let data = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  const [record, setRecord] = useState(data);
  const navigate = useNavigate()
  const location = useLocation();
  useEffect(() => {
    setName(location.state.name)
    setEmail(location.state.email);
    setPassword(location.state.password);
    setGender(location.state.gender)
    setSelectCourse(location.state.course);
    setDate(location.state.date)
    setStatus(location.state.status)


  }, [location.state])

  const handleChangeCourse = (course, checked) => {
    let all = [...selectcourse];
    if (checked) {
      all.push(course);
    } else {
      all = all.filter((val) => val != course);
    }
    setSelectCourse(all);
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    let up = record.map((val) => {
      if (val.id === location.state.id) {
        val.name = name,
          val.email = email,
          val.password = password,
          val.gender = gender,
          val.course = selectcourse,
          val.date = date
      }
      return val;
    })

    localStorage.setItem("users", JSON.stringify(up));
    alert("Record update");
    setTimeout(() => {
      navigate('/');
    }, 2000)
    // setName("");
    // setEmail("");
    // setPassword("");
    // setGender("");
    // setSelectCourse([]);
    // setDate("");
  };

  return (
    <>
      <div className="container mt-5 shadow p-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="d-flex justify-content-end">
              <Link to={`/`}>
                <button className="btn btn-success btn-sm mb-2">View</button>
              </Link>
            </div>
            <form onSubmit={handlesubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="form-control"
                  placeholder="Enter your Name"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="form-control"
                  placeholder="Enter your Email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="form-control"
                  placeholder="Enter your Password"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Gender
                </label>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="male"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                      name="exampleRadios"
                      id="exampleRadios1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="female"
                      checked={gender === "female"}
                      onChange={(e) => setGender(e.target.value)}
                      name="exampleRadios"
                      id="exampleRadios2"
                      defaultValue="option2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios2"
                    >
                      Female
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Course
                </label>
                <div>
                  {course.map((c) => {
                    return (
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={selectcourse.includes(c)}
                          onChange={(e) =>
                            handleChangeCourse(c, e.target.checked)
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox1"
                        >
                          {c}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mb-3">
                <input
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <select onChange={(e) => setStatus(e.target.value)} value={status}>
                  <option>-- Select Status --</option>
                  <option value="Active">Active</option>
                  <option value="Deactive">Deactive</option>

                </select>

              </div>


              <button type="submit" className="btn btn-primary">
                Submit
              </button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
