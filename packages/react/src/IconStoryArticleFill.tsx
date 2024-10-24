/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconStoryArticleFill = (
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
          d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V13.7239L21.9678 13.6949C20.8483 12.6873 19.1323 12.7458 18.0841 13.8274L13.6893 18.3616C13.183 18.8839 12.8999 19.5829 12.8999 20.3103V23H5C3.34315 23 2 21.6569 2 20V4ZM7.70588 6C7.31603 6 7 6.26863 7 6.6C7 6.93137 7.31603 7.2 7.70588 7.2H16.2941C16.684 7.2 17 6.93137 17 6.6C17 6.26863 16.684 6 16.2941 6H7.70588ZM7.70588 10.2C7.31603 10.2 7 10.4686 7 10.8C7 11.1313 7.31603 11.4 7.70588 11.4H16.2941C16.684 11.4 17 11.1313 17 10.8C17 10.4686 16.684 10.2 16.2941 10.2H7.70588ZM7.70588 14.3999C7.31603 14.3999 7 14.6685 7 14.9999C7 15.3313 7.31603 15.5999 7.70588 15.5999H10.2941C10.684 15.5999 11 15.3313 11 14.9999C11 14.6685 10.684 14.3999 10.2941 14.3999H7.70588Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.6666 15.2226C20.3699 14.9258 19.8887 14.9258 19.592 15.2226L15.2226 19.592C15.0801 19.7345 15 19.9277 15 20.1293V22.2401C15 22.6598 15.3402 23 15.7599 23H17.8707C18.0722 23 18.2655 22.9199 18.408 22.7774L22.7774 18.408C23.0742 18.1113 23.0742 17.6301 22.7774 17.3334L20.6666 15.2226ZM16.5198 21.4802V20.444L20.1293 16.8345L21.1655 17.8707L17.5559 21.4802H16.5198Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconStoryArticleFill);
export default ForwardRef;
