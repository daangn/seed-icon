/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconNearMeFill = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.79121 20.4299H11.1084C10.9034 20.316 10.6558 20.1736 10.3763 20.0036C9.5687 19.5124 8.48939 18.7875 7.40727 17.8536C5.265 16.0049 3 13.2389 3 9.76624C3 4.91384 7.04058 1 12 1C16.9594 1 21 4.91384 21 9.76624C21 13.2389 18.735 16.0049 16.5927 17.8536C15.5106 18.7875 14.4313 19.5124 13.6237 20.0036C13.3442 20.1736 13.0966 20.316 12.8916 20.4299H18.2088C18.6458 20.4299 19 20.7814 19 21.215C19 21.6485 18.6458 22 18.2088 22H5.79121C5.35424 22 5 21.6485 5 21.215C5 20.7814 5.35424 20.4299 5.79121 20.4299ZM12.0001 12.8738C13.6387 12.8738 14.9671 11.5558 14.9671 9.9299C14.9671 8.30402 13.6387 6.98598 12.0001 6.98598C10.3614 6.98598 9.03306 8.30402 9.03306 9.9299C9.03306 11.5558 10.3614 12.8738 12.0001 12.8738Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconNearMeFill);
export default ForwardRef;
