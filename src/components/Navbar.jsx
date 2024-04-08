import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <nav>
            <NavLink to={"/"}>ACCUEIL</NavLink>
            <NavLink to={"/rules"}>Yam's rules</NavLink>
            <NavLink to={"/statistics"}>Statistics</NavLink>
        </nav>
    )
}

export default Navbar;
