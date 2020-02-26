import React from 'react';
import MenuItemComponentProps from "../../interfaces/MenuItemComponentProps";
import NavDropdown from "react-bootstrap/NavDropdown";
import SubMenuItem from "./SubMenuItem";
import MenuItem from "../../models/MenuItem";

var snake = require('to-snake-case');

const DropDownMenuItem = (props: MenuItemComponentProps) => {
    const {item} = props;

    const subMenuItem = (child: MenuItem) => <SubMenuItem key={child.label} item={child}/>;

    const hasChildren = (item: MenuItem) => item.children && item.children.length;

    const dropdown = (item: MenuItem) => item.children?.map(child => {
        return hasChildren(child) ? (
            <DropDownMenuItem
                key={child.label}
                item={child}
            />
        ) : subMenuItem(child)
    });

    const navDropdown = (
        item: MenuItem,
        bottom: boolean = false
    ) => (
        <NavDropdown title={item.label}
                     id={snake(item.label)}
                     drop={bottom ? 'bottom' : 'right'}
                     flip="true"
                     focusFirstItemOnShow>
            {dropdown(item)}
        </NavDropdown>
    );

    return (
        item.isRoot ? (
            <>
                {item.children?.map(child => {
                    return child.children && child.children.length ? (
                        navDropdown(child, true)
                    ) : subMenuItem(child)
                })}
            </>
        ) : (
            navDropdown(item)
        )
    );
};

export default DropDownMenuItem;
