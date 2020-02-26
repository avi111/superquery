interface IMenuItem {
    isRoot?: boolean;
    children?: IMenuItem[];
    label: string;
    icon?: string;
}

export default IMenuItem;
