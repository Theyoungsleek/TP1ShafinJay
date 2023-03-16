import React, {useState} from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer"
import Backdrop from "../BackDrop";
import logo from "../logo.png";

import "./MenuNavigation.css";

function MenuNavigation(props){
    const [tiroirOuvert, setTiroirOuvert] = useState(false);

    const ouvrirTiroir = () =>{
        setTiroirOuvert(true);
    };

    const fermerTiroir = () => {
        setTiroirOuvert(false);
    };

    return (
        <React.Fragment>
            {tiroirOuvert && < Backdrop  onClick={fermerTiroir}/>}
              <SideDrawer show={tiroirOuvert} onClick={fermerTiroir}>
                <nav className="main-navigation_drawer-nav">
                    <NavLinks />
                </nav>
              </SideDrawer>

              <MainHeader>
                <Link to="/">
                <img className="main-navigation_title" src={logo} width="200px" alt="Logo du collège" /></Link>
                <nav className="main-navigation_header-nav">
                    <NavLinks />
                </nav>
              </MainHeader>
        </React.Fragment>
    )
}

export default MenuNavigation;