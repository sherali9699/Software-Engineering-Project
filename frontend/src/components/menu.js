import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCart);
  }, []);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Fetch menu items
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
  }, []);

  // Add item to cart and navigate to cart page
  const addToCart = (item) => {
    const updatedItems = [...cartItems];
    const existingItem = updatedItems.find((cartItem) => cartItem._id === item._id);
    if (existingItem) {
      updatedItems.forEach((cartItem) => {
        if (cartItem._id === item._id) {
          cartItem.quantity += 1;
        }
      });
    } else {
      updatedItems.push({ ...item, quantity: 1 });
    }
    setCartItems(updatedItems);
    navigate("/cart", { state: { cartItems: updatedItems } });
  };

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
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <br />
                  <button className="btn-main" onClick={() => addToCart(item)}>
                    Order Now
                  </button>
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



















// import { useState, useEffect } from "react";

// const Menu = () => {
//   const [menuItems, setMenuItems] = useState([]);

//   // Fetch menu items from backend on component mount
//   useEffect(() => {
//     const fetchMenuItems = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/menu/");
//         if (!response.ok) {
//           throw new Error("Failed to fetch menu items");
//         }
//         const data = await response.json();
//         setMenuItems(data);
//       } catch (error) {
//         console.error("Error fetching menu items:", error);
//       }
//     };

//     fetchMenuItems();
//   }, []); // Empty dependency array means it runs once on mount

//   return (
//     <section className="menu" id="menu">
//       <div className="container">
//         <div className="row">
//           {menuItems.length > 0 ? (
//             menuItems.map((item, index) => (
//               <div className="col-lg-4 col-md-6 mt-3" key={item._id}>
//                 <div className="menu-card position-relative">
//                   <span className="no">{String(index + 1).padStart(2, "0")}</span>
//                   <span className="he text-center">
//                     <h3>{item.name}</h3>
//                   </span>
//                   <p>{item.description}</p>
//                   <br />
//                   <button className="btn-main">Order Now</button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No menu items available.</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Menu;




