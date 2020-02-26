import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import menu from "../data/menu";
import MenuItem from "../models/MenuItem";

const Menu = () => {
    const onSelect = (selectedKey: any) => console.log(selectedKey);

    return (
        <Navbar bg="light" expand="lg">
            <Nav onSelect={onSelect} className="mr-auto">
                {menu.map(item => {
                    const menuItem = new MenuItem(item as MenuItem);
                    return menuItem.render();
                })}
            </Nav>
        </Navbar>
    );
};
export default Menu;
