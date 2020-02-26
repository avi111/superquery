import React from "react";
import IMenuItem from "../interfaces/IMenuItem";
import RootMenuItem from "../components/MenuItems/RootMenuItem";
import SubMenuItem from "../components/MenuItems/SubMenuItem";

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
        const {isRoot} = this;
        return isRoot ? (
            <RootMenuItem key={this.label} item={this}/>
        ) : (
            <SubMenuItem item={this}/>
        )
    }

    hasChildren() {
        return this.children && this.children.length;
    }
}

export default MenuItem;
