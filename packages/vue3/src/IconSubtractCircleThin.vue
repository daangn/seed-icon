<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<g id="vector">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 3.13208C7.10238 3.13208 3.13208 7.10238 3.13208 12C3.13208 16.8976 7.10238 20.8679 12 20.8679C16.8976 20.8679 20.8679 16.8976 20.8679 12C20.8679 7.10238 16.8976 3.13208 12 3.13208Z" fill="#212124"/>
<path d="M6.71704 12.0001C6.71704 11.6875 6.97046 11.4341 7.28308 11.4341H11.434H12.5661H16.717C17.0297 11.4341 17.2831 11.6875 17.2831 12.0001C17.2831 12.3127 17.0297 12.5662 16.717 12.5662H12.5661H11.434H7.28308C6.97046 12.5662 6.71704 12.3127 6.71704 12.0001Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconSubtractCircleThin',
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
