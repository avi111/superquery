import React from 'react';
import MenuItemComponentProps from "../../interfaces/MenuItemComponentProps";
import DropDownMenuItem from "./DropDownMenuItem";
import Dropdown from "react-bootstrap/Dropdown";
import Label from "../Label";
import MenuItem from "../../models/MenuItem";

const SubMenuItem = (props: MenuItemComponentProps) => {
    const {eventKey, item} = props;
    const hasChildren = (item: MenuItem) => item.children && item.children.length;
    return hasChildren(item) ? (
        <DropDownMenuItem {...{item, down: item.isRoot}}/>
    ) : (
        <Dropdown.Item {...{eventKey}}>
            <Label item={item}/>
        </Dropdown.Item>
    );
};
export default SubMenuItem;
