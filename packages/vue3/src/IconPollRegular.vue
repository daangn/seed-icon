<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<g id="vector">
<path d="M6.99995 7.2002C6.55812 7.2002 6.19995 7.55837 6.19995 8.0002C6.19995 8.44202 6.55812 8.8002 6.99995 8.8002H13C13.4418 8.8002 13.8 8.44202 13.8 8.0002C13.8 7.55837 13.4418 7.2002 13 7.2002H6.99995Z" fill="#212124"/>
<path d="M6.19995 12.0002C6.19995 11.5584 6.55812 11.2002 6.99995 11.2002H17C17.4418 11.2002 17.8 11.5584 17.8 12.0002C17.8 12.442 17.4418 12.8002 17 12.8002H6.99995C6.55812 12.8002 6.19995 12.442 6.19995 12.0002Z" fill="#212124"/>
<path d="M6.99995 15.2002C6.55812 15.2002 6.19995 15.5584 6.19995 16.0002C6.19995 16.442 6.55812 16.8002 6.99995 16.8002H9.99995C10.4418 16.8002 10.8 16.442 10.8 16.0002C10.8 15.5584 10.4418 15.2002 9.99995 15.2002H6.99995Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.99995 2.2002C3.45355 2.2002 2.19995 3.4538 2.19995 5.0002V19.0002C2.19995 20.5466 3.45355 21.8002 4.99995 21.8002H19C20.5463 21.8002 21.7999 20.5466 21.7999 19.0002V5.0002C21.7999 3.4538 20.5463 2.2002 19 2.2002H4.99995ZM3.79995 5.0002C3.79995 4.33745 4.33721 3.8002 4.99995 3.8002H19C19.6627 3.8002 20.2 4.33745 20.2 5.0002V19.0002C20.2 19.6629 19.6627 20.2002 19 20.2002H4.99995C4.33721 20.2002 3.79995 19.6629 3.79995 19.0002V5.0002Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconPollRegular',
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
