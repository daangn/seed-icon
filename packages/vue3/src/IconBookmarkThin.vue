<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M3.3999 3.20002C3.3999 2.7582 3.75807 2.40002 4.1999 2.40002H19.7999C20.2417 2.40002 20.5999 2.75819 20.5999 3.20002V21C20.5999 21.5052 20.0137 21.7843 19.6215 21.4657L11.9999 15.2731L4.37826 21.4657C3.98615 21.7843 3.3999 21.5052 3.3999 21V3.20002ZM4.5999 3.60002V19.7394L11.4954 14.1368C11.7894 13.898 12.2105 13.898 12.5044 14.1368L19.3999 19.7394V3.60002H4.5999Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconBookmarkThin',
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
