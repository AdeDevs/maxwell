import { NavLink, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Sponsorship from "./pages/sponsor"

function App() {
  return (
    <div className="parent">
      <nav>
        <ul>
          <li> 
            <NavLink to="/">Home </NavLink>
          </li>
          <li> 
            <a href="/#content">Content </a>
          </li>
          <li>
            <NavLink to="/sponsorship"> Sponsorships </NavLink> 
          </li>
          {/* <li>Lists</li>
          <li>Now</li> */}
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sponsorship" element={ <Sponsorship/> } />
      </Routes>
    </div>
  )
}

export default App