import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconListThin = (
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
    data-seed-icon-version="0.6.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M4.1001 7C4.65238 7 5.1001 6.55228 5.1001 6C5.1001 5.44772 4.65238 5 4.1001 5C3.54781 5 3.1001 5.44772 3.1001 6C3.1001 6.55228 3.54781 7 4.1001 7Z"
          fill="currentColor"
        />
        <path
          d="M8.2001 5.3999C7.86873 5.3999 7.6001 5.66853 7.6001 5.9999C7.6001 6.33127 7.86873 6.5999 8.2001 6.5999H20.3C20.6314 6.5999 20.9 6.33127 20.9 5.9999C20.9 5.66853 20.6314 5.3999 20.3 5.3999H8.2001Z"
          fill="currentColor"
        />
        <path
          d="M8.2001 11.3999C7.86873 11.3999 7.6001 11.6685 7.6001 11.9999C7.6001 12.3313 7.86873 12.5999 8.2001 12.5999H20.3C20.6314 12.5999 20.9 12.3313 20.9 11.9999C20.9 11.6685 20.6314 11.3999 20.3 11.3999H8.2001Z"
          fill="currentColor"
        />
        <path
          d="M7.6001 17.9999C7.6001 17.6685 7.86873 17.3999 8.2001 17.3999H20.3C20.6314 17.3999 20.9 17.6685 20.9 17.9999C20.9 18.3313 20.6314 18.5999 20.3 18.5999H8.2001C7.86873 18.5999 7.6001 18.3313 7.6001 17.9999Z"
          fill="currentColor"
        />
        <path
          d="M5.1001 12C5.1001 12.5523 4.65238 13 4.1001 13C3.54781 13 3.1001 12.5523 3.1001 12C3.1001 11.4477 3.54781 11 4.1001 11C4.65238 11 5.1001 11.4477 5.1001 12Z"
          fill="currentColor"
        />
        <path
          d="M4.1001 19C4.65238 19 5.1001 18.5523 5.1001 18C5.1001 17.4477 4.65238 17 4.1001 17C3.54781 17 3.1001 17.4477 3.1001 18C3.1001 18.5523 3.54781 19 4.1001 19Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconListThin);
export default ForwardRef;
