import IMenuItem from "../interfaces/IMenuItem";

class Menu {
    private json: IMenuItem;

    constructor(json: IMenuItem) {
        this.json = json;
    }
}

export default Menu;
