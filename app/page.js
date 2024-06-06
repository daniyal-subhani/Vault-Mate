"use client";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Form from "./pages/Form";
import Passwords from "./pages/Your-Passwords";

export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/form" element={<Form />} />
          <Route path="/your-passwords" element={<Passwords />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
