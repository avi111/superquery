import React from 'react';
import classnames from "classnames";
import MenuItem from "../models/MenuItem";

const Label = (props: { item: MenuItem }) => {
    const {item} = props;

    return (
        <>
            {item.label}
            <i
                className={classnames("fas", item.icon && `fa-${item.icon}`)}></i></>
    );
};
export default Label;
