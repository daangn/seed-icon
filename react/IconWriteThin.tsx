import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconWriteThin = (
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
        d="M15.5756 2.57564C15.81 2.34132 16.1899 2.34132 16.4242 2.57564L21.4242 7.57564C21.6585 7.80995 21.6585 8.18985 21.4242 8.42417L17.4242 12.4242L8.42417 21.4242C8.31164 21.5367 8.15903 21.5999 7.9999 21.5999H2.9999C2.66853 21.5999 2.3999 21.3313 2.3999 20.9999V15.9999C2.3999 15.8408 2.46312 15.6882 2.57564 15.5756L15.5756 2.57564ZM14.4242 8.57564L16.9999 11.1514L20.1514 7.9999L15.9999 3.84843L3.5999 16.2484V20.3999H7.75137L16.1514 11.9999L13.5756 9.42417C13.3413 9.18985 13.3413 8.80995 13.5756 8.57564C13.81 8.34132 14.1899 8.34132 14.4242 8.57564ZM13.9999 20.3999C13.6685 20.3999 13.3999 20.6685 13.3999 20.9999C13.3999 21.3313 13.6685 21.5999 13.9999 21.5999H20.9999C21.3313 21.5999 21.5999 21.3313 21.5999 20.9999C21.5999 20.6685 21.3313 20.3999 20.9999 20.3999H13.9999Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconWriteThin);
export default ForwardRef;
