import React from 'react';
import classnames from "classnames";
import MenuItem from "./MenuItems/MenuItem";


const Label = (props: { item: MenuItem }) => {
    const {item} = props;

    return (
        <>
            {item.label}
            <i
                className={classnames("float-right", item.icon && `${item.icon}`)}></i></>
    );
};
export default Label;
