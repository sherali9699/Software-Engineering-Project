import { useState, useEffect } from "react";

const AddItem = () => {
  //const [menus, setMenus] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    // menuId: "",
    image: null,
  });

  // useEffect(() => {
  //   fetch("/api/menus/additem")
  //     .then((res) => res.json())
  //     .then((data) => setMenus(data))
  //     .catch((error) => console.error("Error fetching menus:", error));
  // }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      console.log("Form data being sent:", formData); // Debugging line
      const response = await fetch("http://localhost:5000/api/menu/additem", {
        method: "POST",
        body: data,
      });
      
      if (!response.ok) {
        throw new Error("Failed to add item");
      }

      alert("Item added successfully!");
      setFormData({ name: "", description: "", price: "", image: null });
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg form-container">
      <h2 className="text-xl font-semibold mb-4 form-title">Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Item Name" 
          className="w-full p-2 border rounded mb-3 input-field" 
          required 
        />
        <textarea 
          name="description" 
          value={formData.description} 
          onChange={handleChange} 
          placeholder="Description" 
          className="w-full p-2 border rounded mb-3 textarea-field"
        />
        <input 
          type="number" 
          name="price" 
          value={formData.price} 
          onChange={handleChange} 
          placeholder="Price" 
          className="w-full p-2 border rounded mb-3 input-field" 
          required 
        />
        {/* <select 
          name="menuId" 
          value={formData.menuId} 
          onChange={handleChange} 
          className="w-full p-2 border rounded mb-3 select-field" 
          required
        >
          <option value="">Select Menu</option>
          {menus.map((menu) => (
            <option key={menu._id} value={menu._id}>{menu.name}</option>
          ))}
        </select> */}
        <input 
          type="file" 
          onChange={handleImageChange} 
          className="w-full p-2 border rounded mb-3 file-input" 
          required 
        />
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded submit-btn"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;