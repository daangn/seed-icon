<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M5.9999 5.3999C6.33127 5.3999 6.5999 5.66853 6.5999 5.9999V17.3999H17.9999C18.3313 17.3999 18.5999 17.6685 18.5999 17.9999C18.5999 18.3313 18.3313 18.5999 17.9999 18.5999H5.9999C5.66853 18.5999 5.3999 18.3313 5.3999 17.9999V5.9999C5.3999 5.66853 5.66853 5.3999 5.9999 5.3999Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconReplyReThin',
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
