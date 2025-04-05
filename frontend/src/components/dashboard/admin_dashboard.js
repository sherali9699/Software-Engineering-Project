import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="container">
        <h1 className="dashboard-title text-center">Admin Dashboard</h1>
        <div className="row justify-content-center">
          {/* Add Item */}
          <div className="col-lg-4 col-md-6 mb-4">
            <Link to="/admin/additem" className="text-decoration-none">
              <div className="card dashboard-card">
                <h3>Add Item</h3>
                <p>Add a new item to the menu.</p>
              </div>
            </Link>
          </div>

          {/* Delete Item */}
          <div className="col-lg-4 col-md-6 mb-4">
            <Link to="/admin/delete-item" className="text-decoration-none">
              <div className="card dashboard-card">
                <h3>Delete Item</h3>
                <p>Remove an item from the menu.</p>
              </div>
            </Link>
          </div>

          {/* Modify Existing Items */}
          <div className="col-lg-4 col-md-6 mb-4">
            <Link to="/admin/modify-items" className="text-decoration-none">
              <div className="card dashboard-card">
                <h3>Modify Existing Items</h3>
                <p>Edit details of existing menu items.</p>
              </div>
            </Link>
          </div>

          {/* Check Orders */}
          <div className="col-lg-4 col-md-6 mb-4">
            <Link to="/admin/check-orders" className="text-decoration-none">
              <div className="card dashboard-card">
                <h3>Check Orders</h3>
                <p>View all customer orders.</p>
              </div>
            </Link>
          </div>

          {/* Check Users */}
          <div className="col-lg-4 col-md-6 mb-4">
            <Link to="/admin/check-users" className="text-decoration-none">
              <div className="card dashboard-card">
                <h3>Check Users</h3>
                <p>See registered users.</p>
              </div>
            </Link>
          </div>

          {/* Check Existing Items */}
          <div className="col-lg-4 col-md-6 mb-4">
            <Link to="/admin/check-items" className="text-decoration-none">
              <div className="card dashboard-card">
                <h3>Check Existing Items</h3>
                <p>View all current menu items.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;