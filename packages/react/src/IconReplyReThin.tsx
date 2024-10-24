/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconReplyReThin = (
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
        d="M5.9999 5.3999C6.33127 5.3999 6.5999 5.66853 6.5999 5.9999V17.3999H17.9999C18.3313 17.3999 18.5999 17.6685 18.5999 17.9999C18.5999 18.3313 18.3313 18.5999 17.9999 18.5999H5.9999C5.66853 18.5999 5.3999 18.3313 5.3999 17.9999V5.9999C5.3999 5.66853 5.66853 5.3999 5.9999 5.3999Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconReplyReThin);
export default ForwardRef;
