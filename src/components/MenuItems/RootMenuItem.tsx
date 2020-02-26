import React from 'react';
import MenuItemComponentProps from "../../interfaces/MenuItemComponentProps";
import Nav from "react-bootstrap/Nav";
import DropDownMenuItem from "./DropDownMenuItem";
import Label from "../Label";

const RootMenuItem = (props: MenuItemComponentProps) => {
    const {eventKey, item} = props;
    return item.children && item.children.length ? (
        <DropDownMenuItem {...props}/>
    ) : (
        <Nav.Link {...{eventKey}}>
            <Label item={item}/>
        </Nav.Link>
    );
};
export default RootMenuItem;
