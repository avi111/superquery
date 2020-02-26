import IMenuItem from "../interfaces/IMenuItem";

const menu: IMenuItem[] = [
    {
        isRoot: true,
        children: [
            {
                label: 'File',
                icon: 'coffee',
                children: [
                    {
                        label: 'js',
                        icon: 'coffee',
                        children: [
                            {
                                label: 'js',
                                icon: 'coffee',
                            },
                            {
                                label: 'jsx',
                                icon: 'coffee',
                            },
                            {
                                label: 'ts',
                                icon: 'coffee',
                            },
                            {
                                label: 'tsx',
                                icon: 'coffee',
                            },
                            {
                                label: 'coffee',
                                icon: 'coffee',
                            },
                        ]
                    },
                    {
                        label: 'css',
                        icon: 'coffee',
                        children: [
                            {
                                label: 'css',
                                icon: 'coffee',
                            },
                            {
                                label: 'scss',
                                icon: 'coffee',
                            },
                            {
                                label: 'less',
                                icon: 'coffee',
                            },
                        ]
                    },
                    {
                        icon: 'coffee',
                        label: 'json'
                    }
                ]
            },
            {
                label: 'Image',
                icon: 'coffee',
                children: [
                    {
                        label: 'png',
                        icon: 'coffee',

                    },
                    {
                        label: 'jpg',
                        icon: 'coffee',

                    },
                ]
            },
            {
                label: 'Document',
                icon: 'coffee',
                children: [
                    {
                        label: 'doc',
                        icon: 'coffee',

                    },
                    {
                        label: 'pdf',
                        icon: 'coffee',

                    },
                ]
            },
            {
                icon: 'envelope',
                label: 'Email'
            }
        ],
        label: 'New',
    },
    {
        isRoot: true,
        label: 'Contact',
    },
    {
        isRoot: true,
        label: 'About',
    }
];

export default menu;
