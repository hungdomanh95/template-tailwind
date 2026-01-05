import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import HomePage from "@/pages/HomePage";
import AboutUsPage from "@/pages/AboutUsPage";


export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
