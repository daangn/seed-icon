<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<path id="vector" d="M3.3999 3.3999H20.5999V6.9999C20.5999 7.33127 20.3313 7.5999 19.9999 7.5999C19.6685 7.5999 19.3999 7.33127 19.3999 6.9999V4.5999H12.5999V19.3999H14.9999C15.3313 19.3999 15.5999 19.6685 15.5999 19.9999C15.5999 20.3313 15.3313 20.5999 14.9999 20.5999H8.9999C8.66853 20.5999 8.3999 20.3313 8.3999 19.9999C8.3999 19.6685 8.66853 19.3999 8.9999 19.3999H11.3999V4.5999H4.5999V6.9999C4.5999 7.33127 4.33127 7.5999 3.9999 7.5999C3.66853 7.5999 3.3999 7.33127 3.3999 6.9999V3.3999Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconTextThin',
  props: {
    size: {
      type: [Number, String] as PropType<number | string>,
      default: 24,
    },
  },
  setup(props) {
    const svg = ref<SVGSVGElement | null>(null);

    return {
      svg,
      size: props.size,
    };
  },
});
</script>
