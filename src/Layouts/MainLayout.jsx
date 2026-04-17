import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen page-bg text-slate-800">
      <Navbar />
      <main className="min-h-[calc(100vh-88px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}