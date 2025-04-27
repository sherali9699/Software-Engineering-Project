import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Cart = () => {
  const { state } = useLocation();
  const [cartItems, setCartItems] = useState(state?.cartItems || JSON.parse(localStorage.getItem("cartItems")) || []);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Adjust item quantity
  const updateQuantity = (itemId, change) => {
    const updatedItems = cartItems
      .map((item) =>
        item._id === itemId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCartItems(updatedItems);
  };

  // Remove item from cart
  const removeItem = (itemId) => {
    const updatedItems = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedItems);
  };

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Submit order to backend
  const handleCompleteOrder = async () => {

    if (cartItems.length === 0) {
      setError("Cart is empty!");
      return;
    }

    const orderData = {
      userId: localStorage.getItem("userId") || "guest",
      items: cartItems.map((item) => ({
        itemId: item._id,
        quantity: item.quantity,
        price: item.price,
      })),
      totalAmount,
      status: "pending",
      deliveryAddress: "N/A",
    };

    console.log("orderData:", orderData);


    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to place order");
      }

      alert("Order placed successfully!");
      setCartItems([]);
      localStorage.removeItem("cartItems"); // Clear cart in localStorage
      navigate("/"); // Redirect to home
    } catch (error) {
      console.error("Error placing order:", error);
      setError(error.message);
    }
  };

  return (
    <div className="cart-page">
      <div className="container">
        <h2 className="cart-title">Your Cart</h2>
        {error && <p className="cart-error">{error}</p>}
        {cartItems.length === 0 ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item._id} className="cart-item">
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <div className="cart-item-actions">
                    <button
                      className="cart-quantity-btn"
                      onClick={() => updateQuantity(item._id, -1)}
                    >
                      -
                    </button>
                    <button
                      className="cart-quantity-btn"
                      onClick={() => updateQuantity(item._id, 1)}
                    >
                      +
                    </button>
                    <button
                      className="cart-remove-btn"
                      onClick={() => removeItem(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <h3>Total: ${totalAmount.toFixed(2)}</h3>
            </div>
            <button className="cart-complete-btn" onClick={handleCompleteOrder}>
              Complete Order
            </button>
            <button
              className="cart-back-btn"
              onClick={() => navigate("/")}
            >
              Back to Menu
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;