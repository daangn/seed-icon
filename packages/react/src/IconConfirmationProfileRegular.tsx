/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconConfirmationProfileRegular = (
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
    data-seed-icon-version="0.7.2"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M12.8845 11.279C14.1036 11.5326 15.2246 12.31 15.8547 13.4064C16.1574 13.9301 15.9856 14.5438 15.4783 14.8629C14.5864 15.4193 13.2609 15.673 12.0008 15.673C10.7407 15.673 9.40693 15.4275 8.52323 14.8629C8.01592 14.5438 7.86045 13.9219 8.14684 13.4064C8.7687 12.31 9.89787 11.549 11.1171 11.279C10.3152 10.9353 9.75877 10.1416 9.75877 9.21698C9.75877 7.97324 10.7652 6.9668 12.0008 6.9668C13.2363 6.9668 14.2427 7.97324 14.2427 9.21698C14.2427 10.1416 13.6863 10.9353 12.8845 11.279Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.8039 1.18616C12.2977 0.937945 11.7022 0.937946 11.196 1.18616L3.19604 5.10931C2.58564 5.40865 2.19995 6.02128 2.19995 6.69151V8.90726C2.19995 12.5248 2.98407 15.3802 4.54963 17.6642C6.11316 19.9451 8.40389 21.5797 11.2781 22.8482C11.736 23.0503 12.2639 23.0515 12.7242 22.8462C15.6216 21.5541 17.9035 19.765 19.4567 17.4244C21.0106 15.0831 21.8 12.2431 21.8 8.90726V6.69151C21.8 6.02128 21.4143 5.40865 20.8039 5.10931L12.8039 1.18616ZM11.9106 2.59257C11.9669 2.56499 12.033 2.56499 12.0893 2.59257L20.0893 6.51571C20.1571 6.54897 20.2 6.61704 20.2 6.69151V8.90726C20.2 11.9934 19.4726 14.5225 18.1164 16.5659C16.7597 18.6103 14.7384 20.2217 12.0629 21.4149C12.024 21.4322 11.9759 21.433 11.9337 21.4144C9.23528 20.2234 7.22304 18.7502 5.87675 16.7862C4.53249 14.8251 3.79995 12.2982 3.79995 8.90726V6.69151C3.79995 6.61704 3.84281 6.54897 3.91063 6.51571L11.9106 2.59257Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconConfirmationProfileRegular);
export default ForwardRef;
