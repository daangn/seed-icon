<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<path id="vector" d="M5.56539 12.4341C5.25297 12.1217 4.74644 12.1217 4.43402 12.4341C4.1216 12.7465 4.1216 13.2531 4.43402 13.5655L11.434 20.5655C11.7464 20.8779 12.253 20.8779 12.5654 20.5655L19.5654 13.5655C19.8778 13.2531 19.8778 12.7465 19.5654 12.4341C19.253 12.1217 18.7464 12.1217 18.434 12.4341L12.7997 18.0684V4.0002C12.7997 3.55837 12.4415 3.2002 11.9997 3.2002C11.5579 3.2002 11.1997 3.55837 11.1997 4.0002V18.0684L5.56539 12.4341Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconArrowDownwardRegular',
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
