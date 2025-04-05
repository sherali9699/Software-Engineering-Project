import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ReviewSection = () => {
  return (
    <section className="review" id="review">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="review-text">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="review-box text-center">
                      <div className="review-image1">
                        <img decoding="async" src="images/review/img-1.png" alt="Burger" />
                      </div>
                      <h3>Burger</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                      <button className="btn-main">View menu</button>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="review-box text-center p-3">
                      <div className="review-image2">
                        <img decoding="async" src="images/review/img-2.png" alt="Pizza" />
                      </div>
                      <h3>Pizza</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                      <button className="btn-main">View menu</button>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true">
                    <span className="fas fa-chevron-left slider-icon"></span>
                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true">
                    <span className="fas fa-chevron-right slider-icon"></span>
                  </span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
