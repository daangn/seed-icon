<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<g id="vector">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.19995 3.99995C2.19995 2.45355 3.45355 1.19995 4.99995 1.19995H19C20.5463 1.19995 21.7999 2.45355 21.7999 3.99995V20C21.7999 21.5463 20.5463 22.7999 19 22.7999H4.99995C3.45355 22.7999 2.19995 21.5463 2.19995 20V3.99995ZM4.99995 2.79995C4.33721 2.79995 3.79995 3.33721 3.79995 3.99995V20C3.79995 20.6627 4.33721 21.2 4.99995 21.2H19C19.6627 21.2 20.2 20.6627 20.2 20V3.99995C20.2 3.33721 19.6627 2.79995 19 2.79995H4.99995Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.19995 5.99995C6.19995 5.55812 6.55812 5.19995 6.99995 5.19995H17C17.4418 5.19995 17.8 5.55812 17.8 5.99995V8.99995C17.8 9.44178 17.4418 9.79995 17 9.79995H6.99995C6.55812 9.79995 6.19995 9.44178 6.19995 8.99995V5.99995ZM7.79995 6.79995V8.19995H16.2V6.79995H7.79995Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.19995 13C6.19995 12.5581 6.55812 12.2 6.99995 12.2H17C17.4418 12.2 17.8 12.5581 17.8 13C17.8 13.4418 17.4418 13.8 17 13.8H6.99995C6.55812 13.8 6.19995 13.4418 6.19995 13Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.19995 17C6.19995 16.5581 6.55812 16.2 6.99995 16.2H14C14.4418 16.2 14.8 16.5581 14.8 17C14.8 17.4418 14.4418 17.8 14 17.8H6.99995C6.55812 17.8 6.19995 17.4418 6.19995 17Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
export default {
  name: 'IconArticleRegular',
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
