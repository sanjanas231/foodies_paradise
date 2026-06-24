 function Contact() {
  return (
    <div className="container mt-5">

      <div className="card shadow-lg p-4 border-0 rounded-4">
        
        <h1 className="text-center mb-4">
          📞 Contact <span className="text-danger">FoodApp</span>
        </h1>

        <div className="row text-center">

          <div className="col-md-4 mb-3">
            <div className="p-4 bg-light rounded-4">
              <h2>☎️</h2>
              <h5>Call Us</h5>
              <p className="text-muted">9876543210</p>
              <button className="btn btn-danger">
                Call Now
              </button>
            </div>
          </div>


          <div className="col-md-4 mb-3">
            <div className="p-4 bg-light rounded-4">
              <h2>📧</h2>
              <h5>Email</h5>
              <p className="text-muted">
                foodapp@gmail.com
              </p>
              <button className="btn btn-warning">
                Mail Us
              </button>
            </div>
          </div>


          <div className="col-md-4 mb-3">
            <div className="p-4 bg-light rounded-4">
              <h2>📍</h2>
              <h5>Location</h5>
              <p className="text-muted">
                Chennai, Tamil Nadu
              </p>
              <button className="btn btn-success">
                Visit
              </button>
            </div>
          </div>

        </div>


        <hr />

        <h4 className="text-center">
          💬 Send us a message
        </h4>

        <div className="row mt-3">

          <div className="col-md-6">
            <input
              className="form-control mb-3"
              placeholder="Your Name"
            />
          </div>

          <div className="col-md-6">
            <input
              className="form-control mb-3"
              placeholder="Your Email"
            />
          </div>

          <div className="col-md-12">
            <textarea
              className="form-control mb-3"
              rows="4"
              placeholder="Write your message..."
            ></textarea>
          </div>

        </div>

        <div className="text-center">
          <button className="btn btn-dark px-5">
            🚀 Send Message
          </button>
        </div>


      </div>

    </div>
  );
}

export default Contact;