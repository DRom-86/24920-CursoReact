import { buildQueries } from "@testing-library/react";
import React from "react";
// import logo from './components/logo'

function NavBar() {
  return (
    <nav className="container bg-dark d-flex text-white mt-1">
        <div className="text-center">
            {/* {logo} */}
            <h1 className="fs-6 text my-3">DISTRIBUIDORA</h1>
        </div>
        <div className="container ">
            <ul className="list-unstyled d-flex justify-content-around navbar-bar my-3 w-75 m-auto">
                <li className="nav-item border-bottom"> <a className="text-decoration-none text-reset p-3" href="#">Nosotros</a></li>
                <li className="nav-item border-bottom"> <a className="text-decoration-none text-reset p-3" href="#">Productos</a></li>
                <li className="nav-item border-bottom"> <a className="text-decoration-none text-reset p-3" href="#">Ingresar</a> </li>
                <li className="nav-item border-bottom"> <a className="text-decoration-none text-reset p-3" href="#">Contacto</a> </li>
            </ul>
       </div>
       <div className="my-2">
            <button type="button" class="btn btn-dark">Carrito</button>
       </div>
</nav>
  );
};

export default NavBar;



