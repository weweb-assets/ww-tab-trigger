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
            return sidepanelContent.missingTabOrField;
        },
    },
    inherit: {
        type: 'ww-layout',
    },
    options: {
        autoByContent: true,
        displayAllowedValues: ['flex', 'grid'],
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
                tooltip: 'The name of the tab that should be activated when this is clicked.',
            },
            bindable: true,
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
            label: {
                en: 'Items',
                fr: 'Items',
            },
            type: 'Info',
            options: {
                text: { en: 'Elements to repeat' },
            },
            bindable: 'repeatable',
            defaultValue: [],
            bindingValidation: {
                validations: [
                    {
                        type: 'array',
                    },
                    {
                        type: 'object',
                    },
                ],
                tooltip:
                    'A collection or an array of data: \n\n`myCollection` or `[{}, {}, ...] || ["string1", "string2", ...] || [1, 2, ...]`',
            },
        },
        /* wwEditor:start */
        missingTabOrField: {
            hidden: true,
            defaultValue: false,
            editorOnly: true,
        },
        /* wwEditor:end */
        toggleTab: {
            type: 'Button',
            editorOnly: true,
            options: {
                text: { en: 'Toggle tab' },
                action: 'toggleTab',
            },
        },
    },
};
