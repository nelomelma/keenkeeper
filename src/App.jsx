import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import FriendDetailsPage from "./pages/FriendDetailsPage";
import TimelinePage from "./pages/TimelinePage";
import StatsPage from "./pages/StatsPage";
import NotFoundPage from "./pages/NotFoundPage";
import { AppProvider } from "./context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="friend/:id" element={<FriendDetailsPage />} />
          <Route path="timeline" element={<TimelinePage />} />
          <Route path="stats" element={<StatsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2200}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </AppProvider>
  );
}