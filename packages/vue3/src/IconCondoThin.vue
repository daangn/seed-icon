<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<g id="vector">
<path d="M6.99995 8.59998V6.59998H8.99995V8.59998H6.99995Z" fill="#212124"/>
<path d="M6.99995 12.6V10.6H8.99995V12.6H6.99995Z" fill="#212124"/>
<path d="M11 8.59998V6.59998H13V8.59998H11Z" fill="#212124"/>
<path d="M11 12.6V10.6H13V12.6H11Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.8 4.2875C2.8 2.85156 3.96406 1.6875 5.4 1.6875L14.5001 1.6875C15.936 1.6875 17.1001 2.85156 17.1001 4.2875V8.00001H19.5001C20.3837 8.00001 21.1001 8.71635 21.1001 9.60001V21.6C21.1001 21.9314 20.8314 22.2 20.5001 22.2H3.4C3.06863 22.2 2.8 21.9314 2.8 21.6V4.2875ZM8.59997 21H11.4V17.2H8.59997V21ZM12.6 21V16.6C12.6 16.2686 12.3313 16 12 16H7.99998C7.6686 16 7.39997 16.2686 7.39997 16.6V21H4V4.2875C4 3.5143 4.6268 2.8875 5.4 2.8875L14.5001 2.8875C15.2733 2.8875 15.9001 3.5143 15.9001 4.2875V21H12.6ZM17.1001 21V9.20001H19.5001C19.721 9.20001 19.9001 9.37909 19.9001 9.60001V21H17.1001Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconCondoThin',
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
