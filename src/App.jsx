import './App.css'
import Navbar from "./components/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import YamRules from "./pages/YamRules.jsx";
import Statistics from "./pages/Statistics.jsx";

function App() {

  return (
    <>
<Navbar />
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/rules"} element={<YamRules />} />
            <Route path={"/statistics"} element={<Statistics />} />
        </Routes>
    </>
  )
}

export default App
