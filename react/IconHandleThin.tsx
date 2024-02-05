import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconHandleThin = (
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
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.3999 7.9999C3.3999 7.66853 3.66853 7.3999 3.9999 7.3999H19.9999C20.3313 7.3999 20.5999 7.66853 20.5999 7.9999C20.5999 8.33127 20.3313 8.5999 19.9999 8.5999H3.9999C3.66853 8.5999 3.3999 8.33127 3.3999 7.9999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.3999 11.9999C3.3999 11.6685 3.66853 11.3999 3.9999 11.3999H19.9999C20.3313 11.3999 20.5999 11.6685 20.5999 11.9999C20.5999 12.3313 20.3313 12.5999 19.9999 12.5999H3.9999C3.66853 12.5999 3.3999 12.3313 3.3999 11.9999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.3999 15.9999C3.3999 15.6685 3.66853 15.3999 3.9999 15.3999H19.9999C20.3313 15.3999 20.5999 15.6685 20.5999 15.9999C20.5999 16.3313 20.3313 16.5999 19.9999 16.5999H3.9999C3.66853 16.5999 3.3999 16.3313 3.3999 15.9999Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconHandleThin);
export default ForwardRef;
