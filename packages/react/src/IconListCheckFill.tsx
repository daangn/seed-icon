/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconListCheckFill = (
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
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V14.082C20.8303 13.8017 19.5567 14.2457 18.8319 15.2947L17.2765 17.546C16.2107 16.3037 14.3411 16.144 13.0795 17.1954C11.8067 18.2561 11.6347 20.1478 12.6954 21.4206L14.0116 23H5C3.34315 23 2 21.6569 2 20V4ZM7.70588 6C7.31603 6 7 6.26863 7 6.6C7 6.93137 7.31603 7.2 7.70588 7.2H16.2941C16.684 7.2 17 6.93137 17 6.6C17 6.26863 16.684 6 16.2941 6H7.70588ZM7.70588 10.2C7.31603 10.2 7 10.4686 7 10.8C7 11.1313 7.31603 11.4 7.70588 11.4H16.2941C16.684 11.4 17 11.1313 17 10.8C17 10.4686 16.684 10.2 16.2941 10.2H7.70588ZM7.70588 14.3999C7.31603 14.3999 7 14.6685 7 14.9999C7 15.3313 7.31603 15.5999 7.70588 15.5999H10.2941C10.684 15.5999 11 15.3313 11 14.9999C11 14.6685 10.684 14.3999 10.2941 14.3999H7.70588Z"
          fill="currentColor"
        />
        <path
          d="M21.8375 17.2679C22.1026 16.9219 22.0364 16.4268 21.6898 16.1622C21.3432 15.8976 20.8473 15.9636 20.5822 16.3097L17.0519 20.9181L15.4148 18.8085C15.1476 18.4641 14.6513 18.4012 14.3063 18.6679C13.9613 18.9347 13.8983 19.4301 14.1655 19.7745L16.4313 22.6943C16.5815 22.8878 16.8132 23.0008 17.0584 23C17.3036 22.9992 17.5346 22.8848 17.6836 22.6904L21.8375 17.2679Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconListCheckFill);
export default ForwardRef;
