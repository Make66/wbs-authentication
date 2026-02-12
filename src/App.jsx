import "./App.css";
import { Routes, Route } from "react-router";
import { HomePage, NotFoundPage, SignInPage, SignUpPage } from "./pages";
import { MainLayout, AdminLayout } from "./layouts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        {/* Admin routes would go here */}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
