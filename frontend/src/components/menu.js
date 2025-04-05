import { useState, useEffect } from "react";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  // Fetch menu items from backend on component mount
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/menu/");
        if (!response.ok) {
          throw new Error("Failed to fetch menu items");
        }
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []); // Empty dependency array means it runs once on mount

  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="row">
          {menuItems.length > 0 ? (
            menuItems.map((item, index) => (
              <div className="col-lg-4 col-md-6 mt-3" key={item._id}>
                <div className="menu-card position-relative">
                  <span className="no">{String(index + 1).padStart(2, "0")}</span>
                  <span className="he text-center">
                    <h3>{item.name}</h3>
                  </span>
                  <p>{item.description}</p>
                  <br />
                  <button className="btn-main">Order Now</button>
                </div>
              </div>
            ))
          ) : (
            <p>No menu items available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;














// const Menu = () =>{
//     return(
//         <section className="menu" id="menu">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-4 col-md-6 mt-3">
//                         <div className="menu-card position-relative">
//                             <span className="no">01</span>
//                             <span className="he text-center"><h3>Fresh Food</h3></span>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laudantium cupiditate unde nobis corporis ipsam.</p>
//                             <br/>
//                             <button className="btn-main">Order Now</button>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 mt-3">
//                         <div className="menu-card position-relative">
//                             <span className="no">02</span>
//                             <span className="he text-center"><h3>Dinner Meals</h3></span>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laudantium cupiditate unde nobis corporis ipsam.</p>
//                             <br/>
//                             <button className="btn-main">Order Now</button>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 mt-3">
//                         <div className="menu-card position-relative">
//                             <span className="no">03</span>
//                             <span className="he text-center"><h3>Classic Menu</h3></span>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laudantium cupiditate unde nobis corporis ipsam.</p>
//                             <br/>
//                             <button className="btn-main">Order Now</button>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 mt-3">
//                         <div className="menu-card position-relative">
//                             <span className="no">04</span>
//                             <span className="he text-center"><h3>Cheif's Special</h3></span>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laudantium cupiditate unde nobis corporis ipsam.</p>
//                             <br/>
//                             <button className="btn-main">Order Now</button>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 mt-3">
//                         <div className="menu-card position-relative">
//                             <span className="no">05</span>
//                             <span className="he text-center"><h3>Pasta and Pizza</h3></span>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laudantium cupiditate unde nobis corporis ipsam.</p>
//                             <br/>
//                             <button className="btn-main">Order Now</button>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 mt-3">
//                         <div className="menu-card position-relative">
//                             <span className="no">06</span>
//                             <span className="he text-center"><h3>Vegan Dishes</h3></span>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laudantium cupiditate unde nobis corporis ipsam.</p>
//                             <br/>
//                             <button className="btn-main">Order Now</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </section>
//     )
// }

// export default Menu;