import { Link, Outlet } from "react-router";
import Footer from "../components/shared/Footer";
import Button from "../components/shared/Button";
import { useNavigate } from "react-router";

const AdminLayout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <nav className="bg-gray-700 text-white px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">ADMIN</div>
          <div>
            <Link to="/admin/create" className="mr-4 hover:underline">
              <Button text="Create Event" />
            </Link>
            <Button text="Logout" onClick={logout} />
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8 mb-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
