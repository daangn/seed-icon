<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.2" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Fill">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M3.77662 3.77662C4.14545 3.40779 4.74344 3.40779 5.11227 3.77662L12 10.6644L18.8877 3.77662C19.2566 3.40779 19.8546 3.40779 20.2234 3.77662C20.5922 4.14545 20.5922 4.74344 20.2234 5.11227L13.3356 12L20.2234 18.8877C20.5922 19.2566 20.5922 19.8546 20.2234 20.2234C19.8546 20.5922 19.2566 20.5922 18.8877 20.2234L12 13.3356L5.11227 20.2234C4.74344 20.5922 4.14545 20.5922 3.77662 20.2234C3.40779 19.8546 3.40779 19.2566 3.77662 18.8877L10.6644 12L3.77662 5.11227C3.40779 4.74344 3.40779 4.14545 3.77662 3.77662Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconCloseFill',
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
