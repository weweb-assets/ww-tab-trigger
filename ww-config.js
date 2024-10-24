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
    states: ['active', 'focus'],
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
            defaultValue: []
        },
    },
};
