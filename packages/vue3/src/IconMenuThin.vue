<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<g id="vector">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.9999C3 4.66853 3.26863 4.3999 3.6 4.3999H20.4C20.7314 4.3999 21 4.66853 21 4.9999C21 5.33127 20.7314 5.5999 20.4 5.5999H3.6C3.26863 5.5999 3 5.33127 3 4.9999Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 11.9999C3 11.6685 3.26863 11.3999 3.6 11.3999H20.4C20.7314 11.3999 21 11.6685 21 11.9999C21 12.3313 20.7314 12.5999 20.4 12.5999H3.6C3.26863 12.5999 3 12.3313 3 11.9999Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 18.9999C3 18.6685 3.26863 18.3999 3.6 18.3999H20.4C20.7314 18.3999 21 18.6685 21 18.9999C21 19.3313 20.7314 19.5999 20.4 19.5999H3.6C3.26863 19.5999 3 19.3313 3 18.9999Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconMenuThin',
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
