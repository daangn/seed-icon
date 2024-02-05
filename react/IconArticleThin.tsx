import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconArticleThin = (
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
          d="M2.40002 3.9999C2.40002 2.56396 3.56408 1.3999 5.00002 1.3999H19C20.436 1.3999 21.6 2.56396 21.6 3.9999V19.9999C21.6 21.4358 20.436 22.5999 19 22.5999H5.00002C3.56408 22.5999 2.40002 21.4358 2.40002 19.9999V3.9999ZM5.00002 2.5999C4.22683 2.5999 3.60002 3.2267 3.60002 3.9999V19.9999C3.60002 20.7731 4.22683 21.3999 5.00002 21.3999H19C19.7732 21.3999 20.4 20.7731 20.4 19.9999V3.9999C20.4 3.2267 19.7732 2.5999 19 2.5999H5.00002Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.40002 5.9999C6.40002 5.66853 6.66865 5.3999 7.00002 5.3999H17C17.3314 5.3999 17.6 5.66853 17.6 5.9999V8.9999C17.6 9.33127 17.3314 9.5999 17 9.5999H7.00002C6.66865 9.5999 6.40002 9.33127 6.40002 8.9999V5.9999ZM7.60002 6.5999V8.3999H16.4V6.5999H7.60002Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.40002 12.9999C6.40002 12.6685 6.66865 12.3999 7.00002 12.3999H17C17.3314 12.3999 17.6 12.6685 17.6 12.9999C17.6 13.3313 17.3314 13.5999 17 13.5999H7.00002C6.66865 13.5999 6.40002 13.3313 6.40002 12.9999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.40002 16.9999C6.40002 16.6685 6.66865 16.3999 7.00002 16.3999H14C14.3314 16.3999 14.6 16.6685 14.6 16.9999C14.6 17.3313 14.3314 17.5999 14 17.5999H7.00002C6.66865 17.5999 6.40002 17.3313 6.40002 16.9999Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconArticleThin);
export default ForwardRef;
