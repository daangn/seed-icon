<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M5.99995 5.2002C6.44178 5.2002 6.79995 5.55837 6.79995 6.0002V17.2002H18C18.4418 17.2002 18.8 17.5584 18.8 18.0002C18.8 18.442 18.4418 18.8002 18 18.8002H5.99995C5.55812 18.8002 5.19995 18.442 5.19995 18.0002V6.0002C5.19995 5.55837 5.55812 5.2002 5.99995 5.2002Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
export default {
  name: 'IconReplyReRegular',
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
  },
  data() {
    return {
      svg: null as Element | null,
    };
  },
  mounted() {
    this.svg = this.$refs.svg as Element;
  },
};
</script>
