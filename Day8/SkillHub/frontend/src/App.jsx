import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import AddCourse from "./pages/AddCourse";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { ThemeProvider } from "./components/ThemeContext";
import { AuthProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>

        <Navbar />

        <div className="layout">

          <Sidebar />

          <main>

            <Routes>

              <Route
                path="/"
                element={<Home />}
              />

              <Route
                path="/courses"
                element={
                  <ProtectedRoute>
                    <Courses />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/contact"
                element={<Contact />}
              />

              <Route
                path="/add-course"
                element={
                  <ProtectedRoute>
                    <AddCourse />
                  </ProtectedRoute>
                }
              />

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

            </Routes>

          </main>

        </div>

        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={3000}
        />

        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}
export default App;