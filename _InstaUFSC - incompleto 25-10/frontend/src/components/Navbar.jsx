import "./Navbar.css";

import { NavLink } from "react-router-dom";
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <nav id="nav">
        <NavLink to={"/"}>InstaUFSC</NavLink>
        <form id="search-form">
          <BsSearch />
          <input type="text" placeholder="Pesquisar" />
        </form>
        <ul>
          <li>
            <NavLink to={"/"}>
              <BsHouseDoorFill />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>Entrar</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Cadastrar</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
