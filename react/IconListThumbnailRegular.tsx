import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconListThumbnailRegular = (
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
          d="M3 5C3 4.44772 3.44772 4 4 4H8C8.55228 4 9 4.44772 9 5V9C9 9.55228 8.55228 10 8 10H4C3.44772 10 3 9.55228 3 9V5ZM4.6 8.4V5.6H7.4V8.4H4.6Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 14C3 13.4477 3.44772 13 4 13H8C8.55228 13 9 13.4477 9 14V18C9 18.5523 8.55228 19 8 19H4C3.44772 19 3 18.5523 3 18V14ZM4.6 17.4V14.6H7.4V17.4H4.6Z"
          fill="currentColor"
        />
        <path
          d="M11.2 7.00001C11.2 6.55818 11.5581 6.20001 12 6.20001H21C21.4418 6.20001 21.8 6.55818 21.8 7.00001C21.8 7.44184 21.4418 7.80001 21 7.80001H12C11.5581 7.80001 11.2 7.44184 11.2 7.00001Z"
          fill="currentColor"
        />
        <path
          d="M12 15.2C11.5581 15.2 11.2 15.5582 11.2 16C11.2 16.4418 11.5581 16.8 12 16.8H21C21.4418 16.8 21.8 16.4418 21.8 16C21.8 15.5582 21.4418 15.2 21 15.2H12Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconListThumbnailRegular);
export default ForwardRef;
