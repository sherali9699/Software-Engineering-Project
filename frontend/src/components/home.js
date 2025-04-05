import Banner from '../assets/Images/Food-Banner.png';
import Menu1 from '../assets/Images/Menu/menu-1.jpg';
import Menu2 from '../assets/Images/Menu/menu-2.jpg';
import Menu3 from '../assets/Images/Menu/menu-3.jpg';
import Menu4 from '../assets/Images/Menu/menu-4.jpg';

const Home = () => {
  const menuImages = [Menu1, Menu2, Menu3, Menu4]; // Store image imports in an array

  return (
    <section id="home" className="home">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6 pt-4">
            <div className="home-text mt-5">
              <h2 className="fir">Dining</h2>
              <h2>On The Lake</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <button className="btn-main">View Menu</button>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="home-image">
              <img src={Banner} alt="foodie" className="image-fluid" />
            </div>
          </div>
        </div>
        <div className="row mt-5 pt-5 mb-5">
          {menuImages.map((image, index) => (
            <div key={index} className="col-sm-12 col-md-6 col-lg-3">
              <div className="home-image2">
                <img src={image} alt={`menu-${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
