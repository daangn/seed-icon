<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<path id="vector" d="M18.4341 11.5659C18.7465 11.8783 19.2531 11.8783 19.5655 11.5659C19.8779 11.2535 19.8779 10.7469 19.5655 10.4345L12.5655 3.43451C12.2531 3.12209 11.7465 3.12209 11.4341 3.43451L4.43412 10.4345C4.1217 10.7469 4.1217 11.2535 4.43412 11.5659C4.74654 11.8783 5.25307 11.8783 5.56549 11.5659L11.1998 5.93157L11.1998 19.9998C11.1998 20.4416 11.558 20.7998 11.9998 20.7998C12.4416 20.7998 12.7998 20.4416 12.7998 19.9998L12.7998 5.93157L18.4341 11.5659Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconArrowUpwardRegular',
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
