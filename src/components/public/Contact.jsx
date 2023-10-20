import React from "react";
import NavigationBar from "../navbar/NavigationBar";
import Footer from "./Footer";

export default function Contact(props) {
  return (
    <>
      <NavigationBar isSecured={false} />

      <div className="container py-4 mx-auto my-auto">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header  ">
                <i className="fa fa-envelope"></i> Contact us.
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label for="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      aria-describedby="emailHelp"
                      placeholder="Enter name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      required
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label for="message">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="6"
                      required
                    ></textarea>
                  </div>
                  <div className="mx-auto">
                    <button
                      type="submit"
                      className="btn btn-primary text-right"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="card bg-light mb-3">
              <div className="card-header text-uppercase">
                <i className="fa fa-home"></i> Address
              </div>
              <div className="card-body bg-white">
                <p>Power Informer By MangeFarming </p>
                <p>Main Road, Pothumarru </p>
                <p>Kalidindi mandal , krishna district, Andhra pradesh</p>
                <p>Email : powerinformer.admin@managefarming.com</p>
                <p>Contact No: 8341344777</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
