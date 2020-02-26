const actions: { [key: string]: () => void } = {
    about: () => {
        alert('moshe');
    }
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
