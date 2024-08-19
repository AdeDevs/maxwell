import { NavLink, Route, Routes } from "react-router-dom"
import TestHome from "./pages/test"

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li> <NavLink to="/">Home </NavLink> </li>
          <li> <NavLink to="/test">Content </NavLink></li>
          <li>Sponsorships</li>
          <li>Lists</li>
          <li>Now</li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={App} />
        <Route path="/test" element={<TestHome/>} />
      </Routes>
      <h1>This is the home page</h1>
    </div>
  )
}

export default App