export default {
    editor: {
        label: {
            en: 'Tab trigger',
        },
        icon: 'slider',         // 📛 TODO
        bubble: {
            icon: 'slider',     // 📛 TODO
        },
        customSettingsPropertiesOrder: [],
    },
    properties: {
        name: {
            label: {
                en: 'Name',
            },
            type: 'Text',
            defaultValue: '',
        },
        tabTriggerElement: {
            hidden: true,
            defaultValue: {
                isWwObject: true,
                type: 'ww-text', // Button
            }
        },
    },
};
