<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M16.6225 3.17006C16.8525 3.40006 16.8525 3.78006 16.6225 4.01006L8.63245 12.0001L16.6225 19.9901C16.8525 20.2201 16.8525 20.6001 16.6225 20.8301C16.3925 21.0601 16.0125 21.0601 15.7825 20.8301L7.37245 12.4201C7.14245 12.1901 7.14245 11.8101 7.37245 11.5801L15.7825 3.17006C16.0125 2.94006 16.3925 2.94006 16.6225 3.17006Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconChevronLeftThin',
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
