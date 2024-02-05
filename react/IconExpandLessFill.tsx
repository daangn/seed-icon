import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconExpandLessFill = (
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
        d="M21.2071 17.2071C20.8166 17.5976 20.1834 17.5976 19.7929 17.2071L12 9.41421L4.20711 17.2071C3.81658 17.5976 3.18342 17.5976 2.79289 17.2071C2.40237 16.8166 2.40237 16.1834 2.79289 15.7929L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L21.2071 15.7929C21.5976 16.1834 21.5976 16.8166 21.2071 17.2071Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconExpandLessFill);
export default ForwardRef;
