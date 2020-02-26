import about from "../menuActions/about";
import contact from "../menuActions/contact";

const actions: { [key: string]: () => void } = {
    about,
    contact
};

const action = (selectedKey: any) => {
    const func = actions[selectedKey];
    if (func) {
        func();
    } else {
        alert(selectedKey);
    }
};

export default action;
