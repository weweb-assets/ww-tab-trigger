<template>
    <wwLayoutItemContext is-repeat :index="1" :data="{ active: isSelected }">
        <button ref="tabButton" role="tab" :aria-selected="isSelected" @click="handleClick" @focus="handleFocus" @blur="handleBlur">
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
            console.log('handleClick ', this.content.name);
            this.setActiveTab(this.content.name);
        },
        handleFocus() {
            console.log('handleFocus ', this.content.name, this.activationMode);
            this.isFocused = true;
            this.setFocusTab(this.content.name);
            if (this.activationMode === 'auto') {
                this.setActiveTab(this.content.name);
            }
        },
        handleBlur() {
            console.log('handleBlur ', this.content.name);
            this.isFocused = false;
        },
    },
    inject: ['setActiveTab', 'activeTabProvided', 'registerTabTrigger', 'activationMode', 'setFocusTab'],
};
</script>

<style lang="scss" scoped>
</style>
