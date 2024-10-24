/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconHouseRegular = (
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
          d="M10.3001 12.5498H8.20008C8.08962 12.5498 8.00008 12.6393 8.00008 12.7498V14.8498C8.00008 14.9603 8.08962 15.0498 8.20008 15.0498H10.3001C10.4105 15.0498 10.5001 14.9603 10.5001 14.8498V12.7498C10.5001 12.6393 10.4105 12.5498 10.3001 12.5498Z"
          fill="currentColor"
        />
        <path
          d="M15.8001 12.5498H13.7001C13.5896 12.5498 13.5001 12.6393 13.5001 12.7498V14.8498C13.5001 14.9603 13.5896 15.0498 13.7001 15.0498H15.8001C15.9105 15.0498 16.0001 14.9603 16.0001 14.8498V12.7498C16.0001 12.6393 15.9105 12.5498 15.8001 12.5498Z"
          fill="currentColor"
        />
        <path
          d="M22.1601 8.1498L12.4101 2.3498C12.1601 2.1998 11.8401 2.1998 11.5901 2.3498L1.84008 8.1498C1.46008 8.3798 1.34008 8.8698 1.56008 9.2498C1.79008 9.62981 2.28008 9.7598 2.66008 9.5298L3.00008 9.3298V20.8198C3.00008 21.3698 3.45008 21.8198 4.00008 21.8198H20.0001C20.5501 21.8198 21.0001 21.3698 21.0001 20.8198V9.3298L21.3401 9.5298C21.4701 9.6098 21.6101 9.63981 21.7501 9.63981C22.0201 9.63981 22.2901 9.4998 22.4401 9.2498C22.6701 8.8698 22.5401 8.3798 22.1601 8.1498ZM19.4001 20.2098H4.60008V8.4998L12.0001 4.0998L19.4001 8.4998V20.2098Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconHouseRegular);
export default ForwardRef;
