import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCallFill = (
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
        d="M3 6.85714C3 14.668 9.33197 21 17.1429 21C17.9209 21 19.3388 21 20.5463 20.5529C20.8304 20.4476 21 20.1657 21 19.8627V15.3714C21 14.9296 20.6418 14.5714 20.2 14.5714H16.2714C16.0061 14.5714 15.7518 14.6768 15.5642 14.8643L13.9286 16.5C13.2857 16.2857 11.5348 15.6955 10.1068 14.2675C8.32053 12.4813 7.71429 10.7143 7.5 10.0714L9.16461 8.43681C9.35609 8.24878 9.46396 7.99168 9.46396 7.72331V3.8C9.46396 3.35817 9.10579 3 8.66396 3H4.13728C3.83427 3 3.55236 3.16959 3.44713 3.45375C3 4.66116 3 6.07911 3 6.85714Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCallFill);
export default ForwardRef;
