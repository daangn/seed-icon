<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Fill">
<path id="Union" d="M6.8 4C6.8 3.33726 7.33726 2.8 8 2.8H17C17.6627 2.8 18.2 3.33726 18.2 4V17.2H6.8V4ZM10.875 3.4C9.99134 3.4 9.275 4.11634 9.275 5C9.275 5.88366 9.99134 6.6 10.875 6.6H14.125C15.0087 6.6 15.725 5.88366 15.725 5C15.725 4.11634 15.0087 3.4 14.125 3.4H10.875ZM6.8 20V19.8H18.2V20C18.2 20.6627 17.6627 21.2 17 21.2H8C7.33726 21.2 6.8 20.6627 6.8 20Z" fill="#212124" stroke="#212124" stroke-width="1.6"/>
</g>
</svg>
</template>

<script lang="ts">
export default {
  name: 'IconMobileFill',
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
