<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<g id="vector">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 3.63265C7.37884 3.63265 3.63265 7.37884 3.63265 12C3.63265 16.6212 7.37884 20.3673 12 20.3673C16.6212 20.3673 20.3673 16.6212 20.3673 12C20.3673 7.37884 16.6212 3.63265 12 3.63265Z" fill="#212124"/>
<path d="M18.6469 17.6468C18.9593 17.9592 18.9593 18.4657 18.6469 18.7782C18.3345 19.0906 17.8279 19.0906 17.5155 18.7782L5.4343 6.69693C5.12188 6.38451 5.12188 5.87798 5.4343 5.56556C5.74672 5.25314 6.25325 5.25314 6.56567 5.56556L18.6469 17.6468Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconProhibitionRegular',
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
