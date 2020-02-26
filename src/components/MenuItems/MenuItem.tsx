import React from "react";
import IMenuItem from "../../interfaces/IMenuItem";
import SubMenuItem from "./SubMenuItem";

var snake = require('to-snake-case');

class MenuItem implements IMenuItem {
    children?: MenuItem[];
    icon?: string;
    isRoot?: boolean;
    label: string;

    constructor(item: MenuItem) {
        this.children = item.children;
        this.icon = item.icon;
        this.isRoot = item.isRoot;
        this.label = item.label;
    }

    render() {
        return <SubMenuItem key={snake(this.label)} item={this}/>
    }
}

export default MenuItem;
