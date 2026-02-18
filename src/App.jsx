import "./App.css";
import { Routes, Route } from "react-router";
import {
  HomePage,
  NotFoundPage,
  SignInPage,
  SignUpPage,
  EventDetailPage,
  EventCreatePage,
  EventEditPage,
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
          <Route path="/admin/event/:id" element={<EventDetailPage />} />
          <Route path="/admin/event/:id/edit" element={<EventEditPage />} />
        </Route>
      )}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
