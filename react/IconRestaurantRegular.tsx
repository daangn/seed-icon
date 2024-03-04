import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconRestaurantRegular = (
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
    data-seed-icon-version="0.5.7"
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
          d="M11.9445 7.9222C11.9445 10.6458 9.93645 12.9003 7.3201 13.2861V20.8674C7.3201 21.3092 6.96193 21.6674 6.5201 21.6674C6.07827 21.6674 5.7201 21.3092 5.7201 20.8674V13.2855C3.1059 12.8978 1.1001 10.6442 1.1001 7.9222C1.1001 4.9276 3.5277 2.5 6.5223 2.5C9.51689 2.5 11.9445 4.9276 11.9445 7.9222ZM6.5223 11.7444C8.63324 11.7444 10.3445 10.0331 10.3445 7.9222C10.3445 5.81126 8.63324 4.1 6.5223 4.1C4.41135 4.1 2.7001 5.81126 2.7001 7.9222C2.7001 10.0331 4.41135 11.7444 6.5223 11.7444Z"
          fill="currentColor"
        />
        <path
          d="M14.9062 8.0001H17.3169V3.8C17.3169 3.35817 17.6751 3 18.1169 3C18.5587 3 18.9169 3.35817 18.9169 3.8V8.0001H21.2939C21.298 7.93393 21.3 7.8672 21.3 7.8V3.8C21.3 3.35817 21.6582 3 22.1 3C22.5419 3 22.9 3.35817 22.9 3.8V7.8C22.9 10.1725 21.1788 12.1429 18.917 12.5308V20.8585C18.917 21.3003 18.5588 21.6585 18.117 21.6585C17.6752 21.6585 17.317 21.3003 17.317 20.8585V12.5364C15.0385 12.1626 13.3 10.1843 13.3 7.8V3.8C13.3 3.35817 13.6582 3 14.1 3C14.5419 3 14.9 3.35817 14.9 3.8V7.8C14.9 7.8672 14.9021 7.93393 14.9062 8.0001Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconRestaurantRegular);
export default ForwardRef;
