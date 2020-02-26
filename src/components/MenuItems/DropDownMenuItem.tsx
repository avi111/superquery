import React, {useState} from 'react';
import MenuItemComponentProps from "../../interfaces/MenuItemComponentProps";
import NavDropdown from "react-bootstrap/NavDropdown";
import SubMenuItem from "./SubMenuItem";
import MenuItem from "./MenuItem";
import Label from "../Label";

var snake = require('to-snake-case');

const DropDownMenuItem = (props: MenuItemComponentProps) => {
    const {item} = props;
    const [shown, setShown] = useState(false);

    return (
        <NavDropdown title={<Label item={item}/>}
                     id={snake(item.label)}
                     drop={item.isRoot ? 'down' : 'right'}
                     flip="true"
                     onMouseOver={() => setShown(true)}
                     onMouseLeave={() => setShown(false)}
                     show={shown}
                     focusFirstItemOnShow>
            {
                item.children?.map(
                    (child: MenuItem) => <SubMenuItem key={child.label} item={child} eventKey={snake(child.label)}/>
                )
            }
        </NavDropdown>
    );
};

export default DropDownMenuItem;
