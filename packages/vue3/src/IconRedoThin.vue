<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<path id="vector" d="M17.0242 2.57588L21.4244 6.97609C21.6587 7.2104 21.6587 7.5903 21.4244 7.82462L17.0242 12.2248C16.7899 12.4591 16.41 12.4591 16.1757 12.2248C15.9414 11.9905 15.9414 11.6106 16.1757 11.3763L19.5371 8.0149H9.68496C6.42648 8.0149 3.78496 10.6564 3.78496 13.9149C3.78496 17.1734 6.42648 19.8149 9.68496 19.8149H15.5001C15.8315 19.8149 16.1001 20.0835 16.1001 20.4149C16.1001 20.7463 15.8315 21.0149 15.5001 21.0149H9.68496C5.76374 21.0149 2.58496 17.8361 2.58496 13.9149C2.58496 9.99368 5.76374 6.8149 9.68496 6.8149H19.5662L16.1757 3.42441C15.9414 3.1901 15.9414 2.8102 16.1757 2.57588C16.41 2.34157 16.7899 2.34157 17.0242 2.57588Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconRedoThin',
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
