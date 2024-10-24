<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Fill">
<g id="vector">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.3999C12.8255 7.3999 13.5 6.72536 13.5 5.8999C13.5 5.07445 12.8255 4.3999 12 4.3999C11.1745 4.3999 10.5 5.07445 10.5 5.8999C10.5 6.72536 11.1745 7.3999 12 7.3999Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 10.4999C11.1745 10.4999 10.5 11.1745 10.5 11.9999C10.5 12.8254 11.1745 13.4999 12 13.4999C12.8255 13.4999 13.5 12.8254 13.5 11.9999C13.5 11.1745 12.8255 10.4999 12 10.4999Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 16.5999C11.1745 16.5999 10.5 17.2745 10.5 18.0999C10.5 18.9254 11.1745 19.5999 12 19.5999C12.8255 19.5999 13.5 18.9254 13.5 18.0999C13.5 17.2745 12.8255 16.5999 12 16.5999Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
export default {
  name: 'IconMoreVertFill',
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
