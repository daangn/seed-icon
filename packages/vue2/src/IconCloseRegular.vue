<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M3.72633 3.72633C4.0281 3.42456 4.51736 3.42456 4.81913 3.72633L12 10.9072L19.1809 3.72633C19.4826 3.42456 19.9719 3.42456 20.2737 3.72633C20.5754 4.0281 20.5754 4.51736 20.2737 4.81913L13.0928 12L20.2737 19.1809C20.5754 19.4826 20.5754 19.9719 20.2737 20.2737C19.9719 20.5754 19.4826 20.5754 19.1809 20.2737L12 13.0928L4.81913 20.2737C4.51736 20.5754 4.0281 20.5754 3.72633 20.2737C3.42456 19.9719 3.42456 19.4826 3.72633 19.1809L10.9072 12L3.72633 4.81913C3.42456 4.51736 3.42456 4.0281 3.72633 3.72633Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
export default {
  name: 'IconCloseRegular',
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
  },
  data() {
    return {
      svg: null as Element | null,
    };
  },
  mounted() {
    this.svg = this.$refs.svg as Element;
  },
};
</script>
