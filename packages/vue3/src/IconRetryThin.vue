<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<path id="vector" d="M15.048 18.6575C14.0285 19.1834 12.8715 19.4807 11.6433 19.4807C7.53581 19.4807 4.20604 16.1509 4.20604 12.0434C4.20604 7.93595 7.53581 4.60618 11.6433 4.60619C15.7508 4.60619 19.0805 7.93595 19.0805 12.0434C19.0805 12.4715 19.0444 12.8907 18.9752 13.2984L16.9714 11.4949C16.7239 11.2721 16.3426 11.2921 16.1198 11.5397C15.897 11.7872 15.9171 12.1685 16.1646 12.3913L19.1796 15.105C19.4149 15.3167 19.7738 15.3105 20.0016 15.0908L22.8156 12.3772C23.0553 12.146 23.0622 11.7642 22.831 11.5245C22.5999 11.2848 22.2181 11.2778 21.9784 11.509L20.2075 13.2168C20.2597 12.8329 20.2866 12.4412 20.2866 12.0434C20.2866 7.26988 16.4168 3.40015 11.6433 3.40015C6.86973 3.40015 3 7.26987 3 12.0434C3 16.817 6.86973 20.6867 11.6433 20.6867C13.0683 20.6867 14.4145 20.3414 15.6009 19.7293C15.8969 19.5766 16.013 19.2129 15.8603 18.9169C15.7076 18.621 15.3439 18.5048 15.048 18.6575Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconRetryThin',
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
