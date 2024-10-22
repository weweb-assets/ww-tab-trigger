<template>
    <div class="ww-tab-trigger-container" @click="handleClick">
        <wwElement class="ww-tab-trigger" v-bind="content.tabTriggerElement" />
    </div>
</template>

<script>
import { computed, ref } from 'vue';

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
        return {};
    },
    computed: {
        isSelected() {
            return this.activeTabProvided === this.content.name;
        },
    },
    watch: {},
    mounted() {
        this.registerTabTrigger(this.content.name);
    },
    methods: {
        handleClick() {
            console.log('handleClick ', this.content.name);
            this.setActiveTab(this.content.name);
        },
    },
    inject: ['setActiveTab', 'activeTabProvided', 'registerTabTrigger'],
};
</script>

<style lang="scss" scoped>
.ww-tab-trigger-container {
    background-color: red;
    padding: 10px;

    .ww-tab-trigger {
        background-color: blue;
    }
}
</style>
