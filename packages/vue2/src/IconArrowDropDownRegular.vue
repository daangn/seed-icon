<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M12 15.7998C12.2374 15.7998 12.4625 15.6943 12.6145 15.512L17.6145 9.51195C17.8133 9.27349 17.8561 8.94159 17.7244 8.66048C17.5928 8.37937 17.3104 8.1998 17 8.1998H6.99996C6.68955 8.1998 6.40715 8.37937 6.27549 8.66048C6.14383 8.94159 6.18666 9.27349 6.38538 9.51195L11.3854 15.512C11.5374 15.6943 11.7625 15.7998 12 15.7998ZM8.70799 9.7998H15.2919L12 13.7502L8.70799 9.7998Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
export default {
  name: 'IconArrowDropDownRegular',
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
