<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<g id="vector">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C3.44772 4 3 4.44772 3 5V11C3 11.5523 3.44772 12 4 12H20C20.5523 12 21 11.5523 21 11V5C21 4.44772 20.5523 4 20 4H4ZM4.2 5.2V10.8H19.8V5.2H4.2Z" fill="#212124"/>
<path d="M3.40002 15.5C3.40002 15.1687 3.66865 14.9 4.00002 14.9H20C20.3314 14.9 20.6 15.1687 20.6 15.5C20.6 15.8314 20.3314 16.1 20 16.1H4.00002C3.66865 16.1 3.40002 15.8314 3.40002 15.5Z" fill="#212124"/>
<path d="M4.00002 18.9C3.66865 18.9 3.40002 19.1687 3.40002 19.5C3.40002 19.8314 3.66865 20.1 4.00002 20.1H20C20.3314 20.1 20.6 19.8314 20.6 19.5C20.6 19.1687 20.3314 18.9 20 18.9H4.00002Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconListCardThin',
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
