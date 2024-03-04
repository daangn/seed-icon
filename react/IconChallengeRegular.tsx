import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconChallengeRegular = (
  {
    size = 24,
    ...props
  }: SVGProps<SVGSVGElement> & {
    size?: number | string,
  },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-seed-icon="true"
    data-seed-icon-version="0.5.7"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.82 3.45899C18.4848 4.46042 17.2803 4.68922 16.1167 4.56886C14.8999 4.44298 13.7012 3.93624 12.3652 3.36367L12.3112 3.34055C11.0364 2.79411 9.629 2.19082 8.14799 2.03761C6.59632 1.87709 4.9921 2.20891 3.33139 3.4505C3.30531 3.46937 3.28041 3.48979 3.25683 3.5116C3.19416 3.56942 3.14258 3.6355 3.1025 3.70687C3.03723 3.82273 3 3.95649 3 4.09895C3 4.09891 3 4.099 3 4.09895V15.3495C3 15.3495 3 15.3496 3 15.3495V21.5632C3 22.0051 3.35817 22.3632 3.8 22.3632C4.24183 22.3632 4.6 22.0051 4.6 21.5632V15.7619C5.80894 14.953 6.91347 14.7684 7.98335 14.8791C9.20017 15.005 10.3989 15.5117 11.7349 16.0843L11.7888 16.1074C13.0636 16.6539 14.4711 17.2572 15.9521 17.4104C17.5073 17.5712 19.1153 17.2376 20.78 15.989C20.9815 15.8379 21.1 15.6008 21.1 15.349V4.09899C21.1 3.79597 20.9288 3.51896 20.6578 3.38344C20.3868 3.24793 20.0625 3.27718 19.82 3.45899ZM4.6 13.9167C5.81276 13.3209 6.99488 13.1683 8.14799 13.2876C9.629 13.4408 11.0364 14.0441 12.3113 14.5906L12.3652 14.6137C13.7012 15.1862 14.8999 15.693 16.1167 15.8189C17.1866 15.9295 18.2911 15.745 19.5 14.9361V5.53125C18.2873 6.12705 17.1052 6.27965 15.9521 6.16036C14.4711 6.00716 13.0637 5.40386 11.7889 4.85742L11.7349 4.8343C10.3989 4.26173 9.20017 3.75499 7.98335 3.62911C6.91347 3.51844 5.80894 3.70298 4.6 4.51195V13.9167Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconChallengeRegular);
export default ForwardRef;
