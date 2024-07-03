/* eslint-disable */ // @ts-nocheck @ts-ignore
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Fill">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M2.2002 5.0002C2.2002 3.4538 3.4538 2.2002 5.0002 2.2002H19C20.5464 2.2002 21.8 3.4538 21.8 5.0002V19.0002C21.8 20.5466 20.5464 21.8002 19 21.8002H5.0002C3.4538 21.8002 2.2002 20.5466 2.2002 19.0002V5.0002ZM5.0002 3.8002C4.33745 3.8002 3.8002 4.33745 3.8002 5.0002V19.0002C3.8002 19.6629 4.33745 20.2002 5.0002 20.2002H6.2V3.8002H5.0002ZM9.2002 7.0002C9.2002 6.55837 9.55837 6.2002 10.0002 6.2002H18.0002C18.442 6.2002 18.8002 6.55837 18.8002 7.0002V10.0002C18.8002 10.442 18.442 10.8002 18.0002 10.8002H10.0002C9.55837 10.8002 9.2002 10.442 9.2002 10.0002V7.0002Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconHousekeepingBookFill',
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
