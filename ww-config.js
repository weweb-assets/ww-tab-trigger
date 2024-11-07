export default {
    editor: {
        label: {
            en: 'Tab trigger',
        },
        icon: 'cursor-click',
        bubble: {
            icon: 'cursor-click',
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
            propertyHelp: {
                tooltip: "The name of the tab that should be activated when this is clicked.",
            },
        },
        disabled: {
            label: {
                en: 'Disabled',
                fr: 'Désactivé',
            },
            type: 'OnOff',
            defaultValue: false,
            section: 'settings',
            bindable: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'A boolean that defines if the input is disabled: `true | false`',
            },
            /* wwEditor:end */
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
