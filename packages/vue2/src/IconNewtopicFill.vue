<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Fill">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM17 8.42857C17 7.63959 16.3604 7 15.5714 7C14.7824 7 14.1429 7.63959 14.1429 8.42857V12.2954L9.40064 7.89192C8.98428 7.5053 8.37837 7.40217 7.85755 7.62929C7.33672 7.85641 7 8.37058 7 8.93877V15.5714C7 16.3604 7.63959 17 8.42857 17C9.21755 17 9.85714 16.3604 9.85714 15.5714V12.2148L14.5994 16.6182C15.0157 17.0049 15.6216 17.108 16.1425 16.8809C16.6633 16.6538 17 16.1396 17 15.5714V8.42857Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
export default {
  name: 'IconNewtopicFill',
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
