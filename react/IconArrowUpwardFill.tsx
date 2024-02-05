import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconArrowUpwardFill = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7071 12.7071C20.3166 13.0976 19.6834 13.0976 19.2929 12.7071L13 6.41421L13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20L11 6.41421L4.70711 12.7071C4.31658 13.0976 3.68342 13.0976 3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconArrowUpwardFill);
export default ForwardRef;
