import React from 'react';
import MenuItemComponentProps from "../../interfaces/MenuItemComponentProps";
import DropDownMenuItem from "./DropDownMenuItem";
import Dropdown from "react-bootstrap/Dropdown";
import Label from "../Label";
import Nav from "react-bootstrap/Nav";
import MenuItem from "./MenuItem";

var snake = require('to-snake-case');

const SubMenuItem = (props: MenuItemComponentProps) => {
    const {item} = props;
    const eventKey = snake(item.label);

    const hasChildren = (item: MenuItem) => item.children && item.children.length;

    return hasChildren(item) ? (
        <DropDownMenuItem {...{item}}/>
    ) : (
        item.isRoot ? (
            <Nav.Link eventKey={eventKey}>
                <Label item={item}/>
            </Nav.Link>
        ) : (
            <Dropdown.Item eventKey={eventKey}>
                <Label item={item}/>
            </Dropdown.Item>
        )
    );
};
export default SubMenuItem;
