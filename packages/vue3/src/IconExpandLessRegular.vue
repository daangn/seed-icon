<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M21.0657 17.0657C20.7533 17.3782 20.2468 17.3782 19.9344 17.0657L12 9.13142L4.06573 17.0657C3.75331 17.3782 3.24678 17.3782 2.93436 17.0657C2.62194 16.7533 2.62194 16.2468 2.93436 15.9344L11.4344 7.43436C11.7468 7.12194 12.2533 7.12194 12.5657 7.43436L21.0657 15.9344C21.3782 16.2468 21.3782 16.7533 21.0657 17.0657Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconExpandLessRegular',
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
