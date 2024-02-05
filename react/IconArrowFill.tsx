import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconArrowFill = (
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
    data-seed-icon-version="0.5.6"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        d="M19.2072 5.18033C19.1631 5.10123 19.1075 5.02684 19.0403 4.95964C18.8399 4.7593 18.5757 4.66174 18.3132 4.66695L7 4.66691C6.44772 4.66691 6 5.11462 6 5.66691C5.99999 6.21919 6.44771 6.66691 6.99999 6.66691L15.9188 6.66694L4.9594 17.6263C4.56887 18.0168 4.56887 18.65 4.9594 19.0405C5.34992 19.431 5.98309 19.431 6.37361 19.0405L17.3334 8.08076V17.0002C17.3334 17.5525 17.7811 18.0002 18.3334 18.0002C18.8856 18.0002 19.3334 17.5525 19.3334 17.0002V5.66695C19.3334 5.4903 19.2876 5.32435 19.2072 5.18033Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconArrowFill);
export default ForwardRef;
