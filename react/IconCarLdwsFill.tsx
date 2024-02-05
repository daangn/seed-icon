import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarLdwsFill = (
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
        d="M23.06 18.98L17.26 4.53C17.1 4.08 16.63 4 16.14 4H8.00001C7.52001 4 7.05001 4.07 6.88001 4.53L1.08001 18.98C0.760007 19.87 1.42001 20.8 2.36001 20.8H21.78C22.72 20.8 23.38 19.87 23.06 18.98ZM12.94 18.59C12.94 18.99 12.55 19.31 12.07 19.31C11.59 19.31 11.2 18.99 11.2 18.59V14.97C11.2 14.57 11.59 14.25 12.07 14.25C12.55 14.25 12.94 14.57 12.94 14.97V18.59ZM12.94 11.85C12.94 12.33 12.55 12.72 12.07 12.72C11.59 12.72 11.2 12.33 11.2 11.85V9.67C11.2 9.19 11.59 8.8 12.07 8.8C12.55 8.8 12.94 9.19 12.94 9.67V11.85ZM12.94 6.52C12.94 6.93 12.55 7.26 12.07 7.26C11.59 7.26 11.2 6.93 11.2 6.52V5.59C11.2 5.18 11.59 4.85 12.07 4.85C12.55 4.85 12.94 5.18 12.94 5.59V6.52Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCarLdwsFill);
export default ForwardRef;
