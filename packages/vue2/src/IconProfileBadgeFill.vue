<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Fill">
<g id="vector">
<path d="M12 17.333C16.4183 17.333 20 13.7513 20 9.33301C20 4.91473 16.4183 1.33301 12 1.33301C7.58172 1.33301 4 4.91473 4 9.33301C4 13.7513 7.58172 17.333 12 17.333Z" fill="#212124"/>
<path d="M5.8667 22.6666V16.7187C6.36063 17.1293 6.89641 17.4975 7.4667 17.8036C8.81523 18.5259 10.3564 18.9355 11.9932 18.9355C13.6328 18.9355 15.1832 18.522 16.5334 17.7973C17.1037 17.4912 17.6394 17.1292 18.1334 16.7185V22.6666C18.1334 22.9439 17.9898 23.2014 17.754 23.3472C17.5181 23.4929 17.2236 23.5062 16.9756 23.3822L12 20.8944L7.02447 23.3822C6.77648 23.5062 6.48197 23.4929 6.24611 23.3472C6.01026 23.2014 5.8667 22.9439 5.8667 22.6666Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
export default {
  name: 'IconProfileBadgeFill',
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
