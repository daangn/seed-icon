<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<path id="vector" d="M3.19995 3.2002H20.7999V7.0002C20.7999 7.44202 20.4418 7.8002 20 7.8002C19.5581 7.8002 19.2 7.44202 19.2 7.0002V4.8002H12.8V19.2002H15C15.4418 19.2002 15.8 19.5584 15.8 20.0002C15.8 20.442 15.4418 20.8002 15 20.8002H8.99995C8.55812 20.8002 8.19995 20.442 8.19995 20.0002C8.19995 19.5584 8.55812 19.2002 8.99995 19.2002H11.2V4.8002H4.79995V7.0002C4.79995 7.44202 4.44178 7.8002 3.99995 7.8002C3.55812 7.8002 3.19995 7.44202 3.19995 7.0002V3.2002Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconTextRegular',
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
