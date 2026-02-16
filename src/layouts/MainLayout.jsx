import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Toaster } from "sonner";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto mb-auto">
        <Outlet />
        <Toaster />
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
