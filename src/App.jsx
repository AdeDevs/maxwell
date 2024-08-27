import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { useRef } from "react";
import Home from "./pages/home";
import Sponsorship from "./pages/sponsor";

function App() {
  const navigate = useNavigate();
  const contentRef = useRef(null);

  const handleScrollToContent = (event) => {
    event.preventDefault(); // Prevent default navigation behavior
    navigate('/'); // Navigate to home page
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0); // Ensure smooth scrolling after navigation
  };

  return (
    <div className="parent">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <a href="/" onClick={handleScrollToContent}>Content</a>
          </li>
          <li>
            <NavLink to="/sponsorship">Sponsorships</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home contentRef={contentRef} />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
      </Routes>
    </div>
  );
}

export default App;
