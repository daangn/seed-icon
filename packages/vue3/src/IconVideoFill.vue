<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Fill">
<g id="vector">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.13333 4C2.95513 4 2 4.89543 2 6V18C2 19.1046 2.95513 20 4.13333 20H14.8667C16.0449 20 17 19.1046 17 18V6C17 4.89543 16.0449 4 14.8667 4H4.13333ZM8 12C9.10457 12 10 11.1046 10 10C10 8.89543 9.10457 8 8 8C6.89543 8 6 8.89543 6 10C6 11.1046 6.89543 12 8 12Z" fill="#212124"/>
<path d="M20.259 17.079L18.2 15.5042V8.49576L20.259 6.92096C20.8733 6.24314 22 6.67772 22 7.5925V16.4075C22 17.3223 20.8733 17.7569 20.259 17.079Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconVideoFill',
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
