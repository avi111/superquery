import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import menu from "../data/menu.json";
import MenuItem from "./MenuItems/MenuItem";
import action from "./actions";

const Menu = () => {
    const onSelect = (selectedKey: any) => action(selectedKey);

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
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
