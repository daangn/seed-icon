import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconForwardThin = (
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
        d="M11.5756 20.4241C11.3413 20.1898 11.3413 19.8099 11.5756 19.5756L18.5513 12.5999H3.99985C3.66848 12.5999 3.39985 12.3312 3.39985 11.9999C3.39985 11.6685 3.66848 11.3999 3.99985 11.3999H18.5513L11.5756 4.42412C11.3413 4.1898 11.3413 3.8099 11.5756 3.57559C11.8099 3.34127 12.1898 3.34127 12.4241 3.57559L20.4241 11.5756C20.6584 11.8099 20.6584 12.1898 20.4241 12.4241L12.4241 20.4241C12.1898 20.6584 11.8099 20.6584 11.5756 20.4241Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconForwardThin);
export default ForwardRef;
