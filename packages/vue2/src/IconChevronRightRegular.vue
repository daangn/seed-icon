<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M8.42511 3.22988L16.6551 11.4499C16.9551 11.7499 16.9551 12.2399 16.6551 12.5399L8.42511 20.7699C8.12511 21.0699 7.63511 21.0699 7.33511 20.7699C7.03511 20.4699 7.03511 19.9799 7.33511 19.6799L15.0151 11.9999L7.33511 4.31988C7.03511 4.01988 7.03511 3.52988 7.33511 3.22988C7.63511 2.92988 8.12511 2.92988 8.42511 3.22988Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
export default {
  name: 'IconChevronRightRegular',
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
