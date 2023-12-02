import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconSearchDocFill = (
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
    data-seed-icon-version="0.5.0"
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
          d="M1 4C1 2.34315 2.34315 1 4 1H18C19.6569 1 21 2.34315 21 4V12C21 12.5523 20.5523 13 20 13C19.4477 13 19 12.5523 19 12V4C19 3.44772 18.5523 3 18 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H12C12.5523 21 13 21.4477 13 22C13 22.5523 12.5523 23 12 23H4C2.34315 23 1 21.6569 1 20V4Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 7C6 6.44772 6.44772 6 7 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H7C6.44772 8 6 7.55228 6 7Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 11C6 10.4477 6.44772 10 7 10H15C15.5523 10 16 10.4477 16 11C16 11.5523 15.5523 12 15 12H7C6.44772 12 6 11.5523 6 11Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 15C6 14.4477 6.44772 14 7 14H11C11.5523 14 12 14.4477 12 15C12 15.5523 11.5523 16 11 16H7C6.44772 16 6 15.5523 6 15Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16ZM13 18C13 15.7909 14.7909 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.7929 19.7929C19.1834 19.4024 19.8166 19.4024 20.2071 19.7929L21.7071 21.2929C22.0976 21.6834 22.0976 22.3166 21.7071 22.7071C21.3166 23.0976 20.6834 23.0976 20.2929 22.7071L18.7929 21.2071C18.4024 20.8166 18.4024 20.1834 18.7929 19.7929Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconSearchDocFill);
export default ForwardRef;
