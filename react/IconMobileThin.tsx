import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMobileThin = (
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
    data-seed-icon-version="0.5.0"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M10.8749 4.3999C10.5435 4.3999 10.2749 4.66853 10.2749 4.9999C10.2749 5.33127 10.5435 5.5999 10.8749 5.5999H14.1249C14.4563 5.5999 14.7249 5.33127 14.7249 4.9999C14.7249 4.66853 14.4563 4.3999 14.1249 4.3999H10.8749Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 4V20C6 21.1046 6.89543 22 8 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2H8C6.89543 2 6 2.89543 6 4ZM17 3.2H8C7.55817 3.2 7.2 3.55817 7.2 4V19H17.8V4C17.8 3.55817 17.4418 3.2 17 3.2Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMobileThin);
export default ForwardRef;
