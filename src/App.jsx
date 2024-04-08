import './App.css'
import Navbar from "./components/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {

  return (
    <>
<Navbar />
        <Routes>
            <Route path={"/"} element={<Home />} />
        </Routes>
    </>
  )
}

export default App
