import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconListCheckRegular = (
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
          d="M21.4859 15.8645C21.8369 16.1329 21.9038 16.6349 21.6354 16.9859L17.4296 22.4859C17.2787 22.6832 17.0449 22.7992 16.7966 22.7999C16.5483 22.8007 16.3137 22.6862 16.1616 22.4899L13.8675 19.5283C13.5969 19.179 13.6607 18.6765 14.01 18.406C14.3593 18.1354 14.8618 18.1992 15.1324 18.5485L16.79 20.6883L20.3645 16.014C20.6329 15.663 21.1349 15.5961 21.4859 15.8645Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.19995 3.99995C2.19995 2.45355 3.45355 1.19995 4.99995 1.19995H19C20.5463 1.19995 21.7999 2.45355 21.7999 3.99995V13C21.7999 13.4418 21.4418 13.8 21 13.8C20.5581 13.8 20.2 13.4418 20.2 13V3.99995C20.2 3.33721 19.6627 2.79995 19 2.79995H4.99995C4.33721 2.79995 3.79995 3.33721 3.79995 3.99995V20C3.79995 20.6627 4.33721 21.2 4.99995 21.2H12.9C13.3418 21.2 13.7 21.5581 13.7 22C13.7 22.4418 13.3418 22.7999 12.9 22.7999H4.99995C3.45355 22.7999 2.19995 21.5463 2.19995 20V3.99995Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.19995 6.99995C7.19995 6.55812 7.55812 6.19995 7.99995 6.19995H16C16.4418 6.19995 16.8 6.55812 16.8 6.99995C16.8 7.44178 16.4418 7.79995 16 7.79995H7.99995C7.55812 7.79995 7.19995 7.44178 7.19995 6.99995Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.19995 11C7.19995 10.5581 7.55812 10.2 7.99995 10.2H16C16.4418 10.2 16.8 10.5581 16.8 11C16.8 11.4418 16.4418 11.8 16 11.8H7.99995C7.55812 11.8 7.19995 11.4418 7.19995 11Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.19995 15C7.19995 14.5581 7.55812 14.2 7.99995 14.2H13C13.4418 14.2 13.8 14.5581 13.8 15C13.8 15.4418 13.4418 15.8 13 15.8H7.99995C7.55812 15.8 7.19995 15.4418 7.19995 15Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconListCheckRegular);
export default ForwardRef;
