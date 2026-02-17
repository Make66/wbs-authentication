import "./App.css";
import { Routes, Route } from "react-router";
import {
  HomePage,
  NotFoundPage,
  SignInPage,
  SignUpPage,
  EventDetailPage,
  EventCreatePage,
} from "./pages";
import { MainLayout, AdminLayout } from "./layouts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/event/:id" element={<EventDetailPage />} />
      </Route>
      {localStorage.getItem("token") && (
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/admin/create" element={<EventCreatePage />} />
        </Route>
      )}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
