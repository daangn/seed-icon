<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<g id="vector">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.3999 7.9999C3.3999 7.66853 3.66853 7.3999 3.9999 7.3999H19.9999C20.3313 7.3999 20.5999 7.66853 20.5999 7.9999C20.5999 8.33127 20.3313 8.5999 19.9999 8.5999H3.9999C3.66853 8.5999 3.3999 8.33127 3.3999 7.9999Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.3999 11.9999C3.3999 11.6685 3.66853 11.3999 3.9999 11.3999H19.9999C20.3313 11.3999 20.5999 11.6685 20.5999 11.9999C20.5999 12.3313 20.3313 12.5999 19.9999 12.5999H3.9999C3.66853 12.5999 3.3999 12.3313 3.3999 11.9999Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.3999 15.9999C3.3999 15.6685 3.66853 15.3999 3.9999 15.3999H19.9999C20.3313 15.3999 20.5999 15.6685 20.5999 15.9999C20.5999 16.3313 20.3313 16.5999 19.9999 16.5999H3.9999C3.66853 16.5999 3.3999 16.3313 3.3999 15.9999Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconHandleThin',
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
