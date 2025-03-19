import React from 'react';

import image1 from '../assets/Images/about-img.png';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xl-4 order-lg-1 order-2">
            <div className="about-us p-3">
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatem, expedita magni sit minima illo nihil iusto corporis exercitationem delectus repellat dolores, laboriosam id ex? Culpa qui iure laboriosam eius.
              </p>
              <button className="btn-main">Learn More</button>
            </div>
          </div>
          <div className="col-md-7 col-xl-8 order-lg-2 order-1">
            <div className="about-image">
              <img decoding="async" src={image1} alt="foodie" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;