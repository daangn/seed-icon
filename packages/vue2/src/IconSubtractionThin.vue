<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M2.3999 11.9999C2.3999 11.6685 2.66853 11.3999 2.9999 11.3999H20.9999C21.3313 11.3999 21.5999 11.6685 21.5999 11.9999C21.5999 12.3313 21.3313 12.5999 20.9999 12.5999H2.9999C2.66853 12.5999 2.3999 12.3313 2.3999 11.9999Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
export default {
  name: 'IconSubtractionThin',
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
