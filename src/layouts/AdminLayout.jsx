import { Outlet } from "react-router";
import Footer from "../components/shared/Footer";
import Button from "../components/shared/Button";

const AdminLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <nav className="bg-gray-700 text-white px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">ADMIN</div>
          <Button text="Logout" />
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
