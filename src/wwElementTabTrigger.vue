<template>
    <wwLayoutItemContext is-repeat :index="1" :data="{ active: isSelected }">
        <button
            ref="tabButton"
            role="tab"
            :aria-selected="isSelected"
            @click="handleClick"
            @focus="handleFocus"
            @blur="handleBlur"
        >
            <wwLayout v-bind="$attrs" path="tabTriggerElement" />
        </button>
    </wwLayoutItemContext>
</template>

<script>
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
        isSelected() {
            return this.activeTabProvided === this.content.name;
        },
        /* wwEditor:start */
        currentName() {
            return this.content.name;
        },
        /* wwEditor:end */
    },
    methods: {
        handleClick() {
            this.setActiveTab(this.content.name);
        },
        handleFocus() {
            this.isFocused = true;
            this.setFocusTab(this.content.name);
            if (this.activationMode === 'auto') {
                this.setActiveTab(this.content.name);
            }
        },
        handleBlur() {
            this.isFocused = false;
            this.onBlurTab(this.content.name);
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
        this.registerTabTrigger(this.content.name, this.$refs.tabButton);
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

<style lang="scss" scoped>
</style>
