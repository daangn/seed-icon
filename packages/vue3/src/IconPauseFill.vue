<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Fill">
<g id="vector">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.3999 5.0002C3.3999 4.00608 4.20579 3.2002 5.1999 3.2002H8.1999C9.19402 3.2002 9.9999 4.00608 9.9999 5.0002V19.0002C9.9999 19.9943 9.19402 20.8002 8.1999 20.8002H5.1999C4.20579 20.8002 3.3999 19.9943 3.3999 19.0002V5.0002Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9999 5.0002C13.9999 4.00608 14.8058 3.2002 15.7999 3.2002H18.7999C19.794 3.2002 20.5999 4.00608 20.5999 5.0002V19.0002C20.5999 19.9943 19.794 20.8002 18.7999 20.8002H15.7999C14.8058 20.8002 13.9999 19.9943 13.9999 19.0002V5.0002Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconPauseFill',
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
