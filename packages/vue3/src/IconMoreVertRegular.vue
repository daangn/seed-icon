<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<g id="vector">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.2001C12.715 7.2001 13.3 6.6151 13.3 5.9001C13.3 5.1851 12.715 4.6001 12 4.6001C11.285 4.6001 10.7 5.1851 10.7 5.9001C10.7 6.6151 11.285 7.2001 12 7.2001Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 10.7001C11.285 10.7001 10.7 11.2851 10.7 12.0001C10.7 12.7151 11.285 13.3001 12 13.3001C12.715 13.3001 13.3 12.7151 13.3 12.0001C13.3 11.2851 12.715 10.7001 12 10.7001Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 16.8001C11.285 16.8001 10.7 17.3851 10.7 18.1001C10.7 18.8151 11.285 19.4001 12 19.4001C12.715 19.4001 13.3 18.8151 13.3 18.1001C13.3 17.3851 12.715 16.8001 12 16.8001Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconMoreVertRegular',
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
