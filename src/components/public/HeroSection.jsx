export default function HeroSection(props) {
  return (
    <>
      <div>
        <div className="px-4 pt-5 vh-100 text-center border-bottom">
          <h1 className="display-4 fw-bold">
            Empowering Farmers with Real-time Insights on Electricity Supply for
            Informed Decisions
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              In the world of agriculture, every moment counts. Our mission is
              to provide farmers with timely, up-to-date information on
              electricity outages and restoration. With our innovative
              technology, we keep you informed about power interruptions and
              ensure you have the critical data you need to make informed
              decisions for your farm. Don't let electricity failures catch you
              off guard – stay ahead with our reliable service. Together, we're
              sowing the seeds of a brighter, more productive future for
              farming.
            </p>
            {/**   <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-sm-3"
            >
              Primary button
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Secondary
            </button>
          </div> **/}
          </div>

          {/**
        <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
          <div className="container px-5">
            <img
              src="bootstrap-docs.png"
              className="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Example image"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>

        **/}
        </div>
      </div>
    </>
  );
}
