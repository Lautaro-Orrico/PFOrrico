import CartWidget from "./CartWidget"
import "./NavBar.css";
import imglogo from "/public/images/logo.png";
import { Link, NavLink } from "react-router-dom";
export default function Nav() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-relativ">
                <a class="navbar-brand ms-3" href="/"><img src={imglogo} width="100px" alt="" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse position-absolute top-50 start-50 translate-middle" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <NavLink to="/"><a class="nav-link active" aria-current="page" href="#">Inicio</a></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/destacado"><a class="nav-link active" href="#">Destacado</a></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/productM"><a class="nav-link active" href="#">Fragancias Masculinas</a></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/productF"> <a class="nav-link active" href="#">Fragancias Femeninas</a></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="position-absolute end-0 translate-end me-4">
                <CartWidget />
            </div>
        </nav>
    );
}


