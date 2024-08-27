import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { useRef } from "react";
import Home from "./pages/home";
import Sponsorship from "./pages/sponsor";

function App() {
  const navigate = useNavigate();
  const contentRef = useRef(null);

  const handleScrollToContent = () => {
    navigate('/'); // Ensure you are on the home page
    contentRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="parent">
      <nav>
        <ul>
          <li> 
            <NavLink to="/">Home </NavLink>
          </li>
          <li> 
            <NavLink onClick={handleScrollToContent}>
              Content
            </NavLink>
          </li>
          <li>
            <NavLink to="/sponsorship"> Sponsorships </NavLink> 
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
