<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<g id="vector">
<path d="M4.99991 15.3999C4.66854 15.3999 4.39991 15.6685 4.39991 15.9999C4.39991 16.3313 4.66854 16.5999 4.99991 16.5999H9.99991C10.3313 16.5999 10.5999 16.3313 10.5999 15.9999C10.5999 15.6685 10.3313 15.3999 9.99991 15.3999H4.99991Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 3.3999C2.16406 3.3999 1 4.56396 1 5.9999V17.9999C1 19.4358 2.16406 20.5999 3.6 20.5999H20.4C21.8359 20.5999 23 19.4358 23 17.9999V5.9999C23 4.56396 21.836 3.3999 20.4 3.3999H3.6ZM2.2 5.9999C2.2 5.2267 2.8268 4.5999 3.6 4.5999H20.4C21.1732 4.5999 21.8 5.2267 21.8 5.9999V17.9999C21.8 18.7731 21.1732 19.3999 20.4 19.3999H3.6C2.8268 19.3999 2.2 18.7731 2.2 17.9999V9.5999H21.8V8.3999H2.2V5.9999Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
export default {
  name: 'IconPaymentThin',
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
