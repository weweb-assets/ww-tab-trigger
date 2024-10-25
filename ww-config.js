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
        hint: (_, sidepanelContent) => {
            if(sidepanelContent.missingTabOrField) {
                return {
                    type: 'warning',
                    header: sidepanelContent.missingTabOrField.header,
                    text: sidepanelContent.missingTabOrField.text,
                };
            }
        },
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
        /* wwEditor:start */
        missingTabOrField: {
            hidden: true,
            defaultValue: false,
            editorOnly: true,
        },
        /* wwEditor:end */
    },
};
