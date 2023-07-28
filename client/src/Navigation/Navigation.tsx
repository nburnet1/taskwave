import React, {useState} from 'react';
import {
    Nav,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink as RSNavLink,
    Collapse,
    UncontrolledDropdown,
    DropdownToggle,
    NavbarToggler, DropdownMenu, DropdownItem, Container
} from "reactstrap";

import {BrowserRouter as Router, Route, NavLink, Routes} from "react-router-dom";
import Home from "../Home/Home";
import WavesPage from "../Waves/WavesPage";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog, faHome, faHouseTsunami} from "@fortawesome/free-solid-svg-icons";
import Settings from '../Settings';


function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };
    return (
        <>
        <Router>
            <Navbar className={"navbar"} dark color={"dark"} expand={"md"} >
                <NavLink to={"/"}>
                    <NavbarBrand>
                        <img src={"/blobanimation.svg"} width={48} height={48}/>
                        TaskWave
                    </NavbarBrand>
                </NavLink>

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem onClick={isOpen ? toggle: () =>{}}>
                            <RSNavLink>
                                <NavLink to="/" >
                                    <FontAwesomeIcon className={"nav-icon"} icon={faHome} />
                                    Home
                                </NavLink>
                            </RSNavLink>

                        </NavItem>
                        <NavItem onClick={isOpen ? toggle: () =>{}}>
                            <RSNavLink>
                                <NavLink to="/waves" >
                                    <FontAwesomeIcon className={"nav-icon"} icon={faHouseTsunami} />
                                    Waves
                                </NavLink>
                            </RSNavLink>
                        </NavItem>

                    </Nav>
                    <Nav className={"ml-auto"} navbar>
                        <UncontrolledDropdown nav end>
                            <DropdownToggle nav caret>
                                <FontAwesomeIcon className={"nav-icon"} icon={faCog} />
                                Settings
                            </DropdownToggle>
                            <DropdownMenu dark>
                                <DropdownItem id={"account"}>
                                    <img src={"/blobaccount.svg"} width={32} height={32}/>
                                    Noah B.
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink to={"/settings"}>
                                        Wave Settings
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>Themes</DropdownItem>
                                <DropdownItem id={"logout"}>Logout</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>


        <Container>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/waves"} element={<WavesPage />} />
                <Route path={"/waves/:id"} element={<WavesPage />} />
                <Route path={"/settings"} element={<Settings />} />
            </Routes>
        </Container>
        </Router>
        </>
    );
}

export default Navigation;