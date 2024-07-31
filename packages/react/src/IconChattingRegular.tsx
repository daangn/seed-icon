/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconChattingRegular = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 9.45439C1 5.28074 5.20875 2.12109 9.96295 2.12109C12.6287 2.12109 15.1229 3.11448 16.7999 4.72301C20.2357 5.62705 23 8.28829 23 11.6954C23 14.2381 21.4756 16.6179 19.1862 17.9605C19.5916 18.7675 19.951 19.347 20.2203 19.737C20.391 19.9843 20.5257 20.1557 20.6134 20.2608L20.7278 20.3913C20.9615 20.6278 21.0281 20.9829 20.8956 21.2882C20.7625 21.5951 20.4553 21.7894 20.121 21.7783L20.1177 21.7781L19.937 21.7656C19.8309 21.7559 19.6821 21.7391 19.4965 21.7099C19.1255 21.6517 18.6064 21.5438 17.9885 21.3448C16.811 20.9654 15.2736 20.2538 13.7251 18.9227C12.0072 18.877 10.4287 18.4532 9.06256 17.7038C7.93803 18.4539 6.86882 18.8976 5.9957 19.1595C5.37526 19.3457 4.85378 19.4401 4.48093 19.488C4.29439 19.512 4.14468 19.5244 4.03791 19.5308L3.85185 19.5377C3.51355 19.5377 3.21045 19.3286 3.09022 19.0124C2.97106 18.699 3.05615 18.3449 3.3039 18.1198C3.30563 18.1182 3.31013 18.1138 3.31726 18.1067C3.3333 18.0907 3.36269 18.0604 3.40404 18.0139C3.48673 17.921 3.61746 17.7635 3.785 17.5266C4.05234 17.1487 4.4139 16.568 4.8235 15.7251C2.52871 14.3836 1 12.0007 1 9.45439ZM10.8802 16.7484C11.8314 17.1044 12.8905 17.2973 14.0371 17.2973C14.2383 17.2973 14.4325 17.3718 14.5821 17.5064C15.9228 18.713 17.2572 19.3695 18.2884 19.7268C18.0077 19.2441 17.6965 18.6537 17.3704 17.9423C17.1829 17.5332 17.3625 17.0496 17.7716 16.8621C19.9679 15.8555 21.3704 13.7781 21.3704 11.6954C21.3704 9.8924 20.2643 8.22637 18.4821 7.167C18.7692 7.88143 18.9259 8.64903 18.9259 9.45439C18.9259 13.3573 15.2454 16.3735 10.8802 16.7484ZM5.70388 17.5438C5.98896 17.0513 6.30463 16.4402 6.63479 15.6899C6.81407 15.2824 6.63316 14.8065 6.22848 14.621C4.03224 13.6144 2.62973 11.537 2.62973 9.45436C2.62973 6.49842 5.7543 3.75069 9.96305 3.75069C14.1718 3.75069 17.2964 6.49842 17.2964 9.45436C17.2964 12.4103 14.1718 15.158 9.96305 15.158C9.76175 15.158 9.56758 15.2325 9.41796 15.3672C8.07152 16.579 6.73265 17.2121 5.70388 17.5438Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconChattingRegular);
export default ForwardRef;
