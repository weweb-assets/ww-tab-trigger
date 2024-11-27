<template>
    <wwLayout
        v-bind="$attrs"
        :tag="tag"
        :disabled="isDisabled"
        ref="tabButton"
        role="tab"
        :aria-selected="isSelected"
        @click="handleClick"
        @focus="handleFocus"
        @blur="handleBlur"
        path="tabTriggerElement"
    />
</template>

<script>
import { inject, computed } from 'vue';
/* wwEditor:start */
import useTabTriggerHint from './editor/useTabTriggerHint';
/* wwEditor:end */

export default {
    props: {
        content: { type: Object, required: true },
        /* wwEditor:start */
        wwFrontState: { type: Object, required: true },
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
        wwElementState: { type: Object, required: true },
    },
    emits: [],
    setup(props, { emit }) {
        const activeTabProvided = inject('activeTabProvided');
        const isSelected = computed(() => activeTabProvided.value === props.content.name);

        wwLib.wwElement.useRegisterElementLocalContext('tabTrigger', { isSelected });

        /* wwEditor:start */
        useTabTriggerHint(emit);
        /* wwEditor:end */
    },
    data() {
        return {
            isFocused: false,
            /* wwEditor:start */
            isMounted: false,
            /* wwEditor:end */
        };
    },
    computed: {
        isEditing() {
            /* wwEditor:start */
            return this.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION;
            /* wwEditor:end */
            // eslint-disable-next-line no-unreachable
            return false;
        },
        isSelected() {
            return this.activeTabProvided === this.content.name;
        },
        isDisabled() {
            return this.content.disabled;
        },
        tag(){
            this.isEditing ? 'div' : 'button'
        },
        /* wwEditor:start */
        currentName() {
            return this.content.name;
        },
        /* wwEditor:end */
    },
    methods: {
        handleClick() {
            if (!this.isEditing) {
                this.setActiveTab(this.content.name);
            }
        },
        handleFocus() {
            if (!this.isEditing) {
                this.isFocused = true;
                this.setFocusTab(this.content.name);
                if (this.activationMode === 'auto') {
                    this.setActiveTab(this.content.name);
                }
            }
        },
        handleBlur() {
            if (!this.isEditing) {
                this.isFocused = false;
                this.onBlurTab(this.content.name);
            }
        },
        toggleTab() {
            this.setActiveTab(this.content.name);
        },
    },
    watch: {
        isSelected: {
            immediate: true,
            handler(value) {
                if (value) {
                    this.$emit('add-state', 'active');
                } else {
                    this.$emit('remove-state', 'active');
                }
            },
        },
        isFocused: {
            immediate: true,
            handler(value) {
                if (value) {
                    this.$emit('add-state', 'focus');
                } else {
                    this.$emit('remove-state', 'focus');
                }
            },
        },
        /* wwEditor:start */
        currentName: {
            immediate: true,
            handler(newValue, oldValue) {
                this.isMounted ? this.hintChangeTabName(oldValue, newValue) : null;
            },
        },
        /* wwEditor:end */
    },
    mounted() {
        this.registerTabTrigger(this.content.name, this.$refs.tabButton.$el);
        /* wwEditor:start */
        this.hintRegisterTabTrigger(this.content.name);
        this.isMounted = true;
        /* wwEditor:end */
    },
    unmounted() {
        /* wwEditor:start */
        this.hintUnregisterTabTrigger(this.content.name);
        /* wwEditor:end */
    },
    inject: [
        'setActiveTab',
        'activeTabProvided',
        'registerTabTrigger',
        'activationMode',
        'setFocusTab',
        'onBlurTab',

        /* wwEditor:start */
        'hintRegisterTabTrigger',
        'hintUnregisterTabTrigger',
        'hintChangeTabName',
        /* wwEditor:end */
    ],
};
</script>

<style lang="scss" scoped></style>
