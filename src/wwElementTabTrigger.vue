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
    setup(props) {},
    data() {
        return {
            isFocused: false,
        };
    },
    computed: {
        isSelected() {
            return this.activeTabProvided === this.content.name;
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
    },
    mounted() {
        this.registerTabTrigger(this.content.name, this.$refs.tabButton);
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
    inject: [
        'setActiveTab', 
        'activeTabProvided', 
        'registerTabTrigger', 
        'activationMode', 
        'setFocusTab', 
        'onBlurTab'
        ],
};
</script>

<style lang="scss" scoped>
</style>
