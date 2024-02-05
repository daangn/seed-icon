import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPollThin = (
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
          d="M6.9999 7.3999C6.66853 7.3999 6.3999 7.66853 6.3999 7.9999C6.3999 8.33127 6.66853 8.5999 6.9999 8.5999H12.9999C13.3313 8.5999 13.5999 8.33127 13.5999 7.9999C13.5999 7.66853 13.3313 7.3999 12.9999 7.3999H6.9999Z"
          fill="currentColor"
        />
        <path
          d="M6.3999 11.9999C6.3999 11.6685 6.66853 11.3999 6.9999 11.3999H16.9999C17.3313 11.3999 17.5999 11.6685 17.5999 11.9999C17.5999 12.3313 17.3313 12.5999 16.9999 12.5999H6.9999C6.66853 12.5999 6.3999 12.3313 6.3999 11.9999Z"
          fill="currentColor"
        />
        <path
          d="M6.9999 15.3999C6.66853 15.3999 6.3999 15.6685 6.3999 15.9999C6.3999 16.3313 6.66853 16.5999 6.9999 16.5999H9.9999C10.3313 16.5999 10.5999 16.3313 10.5999 15.9999C10.5999 15.6685 10.3313 15.3999 9.9999 15.3999H6.9999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.9999 2.3999C3.56396 2.3999 2.3999 3.56396 2.3999 4.9999V18.9999C2.3999 20.4358 3.56396 21.5999 4.9999 21.5999H18.9999C20.4358 21.5999 21.5999 20.4358 21.5999 18.9999V4.9999C21.5999 3.56396 20.4358 2.3999 18.9999 2.3999H4.9999ZM3.5999 4.9999C3.5999 4.2267 4.2267 3.5999 4.9999 3.5999H18.9999C19.7731 3.5999 20.3999 4.2267 20.3999 4.9999V18.9999C20.3999 19.7731 19.7731 20.3999 18.9999 20.3999H4.9999C4.2267 20.3999 3.5999 19.7731 3.5999 18.9999V4.9999Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPollThin);
export default ForwardRef;
