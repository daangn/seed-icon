<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M6.5999 1.9999C6.5999 1.66853 6.33127 1.3999 5.9999 1.3999C5.66853 1.3999 5.3999 1.66853 5.3999 1.9999V5.3999H1.9999C1.66853 5.3999 1.3999 5.66853 1.3999 5.9999C1.3999 6.33127 1.66853 6.5999 1.9999 6.5999H5.3999V17.9999C5.3999 18.3313 5.66853 18.5999 5.9999 18.5999H17.3999V21.9999C17.3999 22.3313 17.6685 22.5999 17.9999 22.5999C18.3313 22.5999 18.5999 22.3313 18.5999 21.9999V18.5999H21.9999C22.3313 18.5999 22.5999 18.3313 22.5999 17.9999C22.5999 17.6685 22.3313 17.3999 21.9999 17.3999H18.5999V5.9999C18.5999 5.66853 18.3313 5.3999 17.9999 5.3999H6.5999V1.9999ZM6.5999 6.5999V17.3999H17.3999V6.5999H6.5999Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconPhotoEditCropThin',
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
