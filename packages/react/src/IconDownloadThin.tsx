/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconDownloadThin = (
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
        d="M11.9999 1.8999C12.3313 1.8999 12.5999 2.16853 12.5999 2.4999V17.0514L18.5756 11.0756C18.81 10.8413 19.1899 10.8413 19.4242 11.0756C19.6585 11.31 19.6585 11.6899 19.4242 11.9242L12.4242 18.9242C12.1899 19.1585 11.81 19.1585 11.5756 18.9242L4.57564 11.9242C4.34132 11.6899 4.34132 11.31 4.57564 11.0756C4.80995 10.8413 5.18985 10.8413 5.42417 11.0756L11.3999 17.0514V2.4999C11.3999 2.16853 11.6685 1.8999 11.9999 1.8999ZM4.3999 21.4999C4.3999 21.1685 4.66853 20.8999 4.9999 20.8999H18.9999C19.3313 20.8999 19.5999 21.1685 19.5999 21.4999C19.5999 21.8313 19.3313 22.0999 18.9999 22.0999H4.9999C4.66853 22.0999 4.3999 21.8313 4.3999 21.4999Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconDownloadThin);
export default ForwardRef;
