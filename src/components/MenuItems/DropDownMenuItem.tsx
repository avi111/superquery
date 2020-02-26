import React from 'react';
import MenuItemComponentProps from "../../interfaces/MenuItemComponentProps";
import NavDropdown from "react-bootstrap/NavDropdown";
import SubMenuItem from "./SubMenuItem";

var snake = require('to-snake-case');

const DropDownMenuItem = (props: MenuItemComponentProps) => {
    const {item} = props;

    return (
        <NavDropdown title={item.label}
                     id={snake(item.label)}
                     drop={item.isRoot ? 'down' : 'right'}
                     flip="true"
                     focusFirstItemOnShow>
            {
                item.children?.map(
                    child => <SubMenuItem key={child.label} item={child} eventKey={snake(child.label)}/>
                )
            }
        </NavDropdown>
    );
};

export default DropDownMenuItem;
