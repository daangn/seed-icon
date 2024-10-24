/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconDirectionThin = (
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
    data-seed-icon-version="0.7.3"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        d="M15.4242 2.17574C15.1899 1.94142 14.81 1.94142 14.5756 2.17574C14.3413 2.41005 14.3413 2.78995 14.5756 3.02426L18.5514 7H7.9999C5.45939 7 3.3999 9.05949 3.3999 11.6V21.6C3.3999 21.9314 3.66853 22.2 3.9999 22.2C4.33127 22.2 4.5999 21.9314 4.5999 21.6V11.6C4.5999 9.72223 6.12213 8.2 7.9999 8.2H18.5514L14.5756 12.1757C14.3413 12.4101 14.3413 12.7899 14.5756 13.0243C14.81 13.2586 15.1899 13.2586 15.4242 13.0243L20.4242 8.02426C20.6585 7.78995 20.6585 7.41005 20.4242 7.17574L15.4242 2.17574Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconDirectionThin);
export default ForwardRef;
