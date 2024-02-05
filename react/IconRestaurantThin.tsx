import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconRestaurantThin = (
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
          d="M11.8444 7.9222C11.8444 10.7147 9.73335 13.0142 7.02007 13.3118V21.0674C7.02007 21.3988 6.75144 21.6674 6.42007 21.6674C6.0887 21.6674 5.82007 21.3988 5.82007 21.0674V13.3113C3.10884 13.0118 1 10.7133 1 7.9222C1 4.9276 3.4276 2.5 6.4222 2.5C9.41679 2.5 11.8444 4.9276 11.8444 7.9222ZM6.4222 12.1444C8.75405 12.1444 10.6444 10.2541 10.6444 7.9222C10.6444 5.59034 8.75405 3.7 6.4222 3.7C4.09034 3.7 2.2 5.59034 2.2 7.9222C2.2 10.2541 4.09034 12.1444 6.4222 12.1444Z"
          fill="currentColor"
        />
        <path
          d="M14.1 3C14.4314 3 14.7 3.26863 14.7 3.6V7.6C14.7 7.73533 14.7079 7.8688 14.7233 8H17.5V3.6C17.5 3.26863 17.7686 3 18.1 3C18.4314 3 18.7 3.26863 18.7 3.6V8H21.4767C21.4921 7.8688 21.5 7.73533 21.5 7.6V3.6C21.5 3.26863 21.7686 3 22.1 3C22.4314 3 22.7 3.26863 22.7 3.6V7.6C22.7 9.93716 20.957 11.8672 18.7 12.1612V21.0585C18.7 21.3899 18.4314 21.6585 18.1 21.6585C17.7686 21.6585 17.5 21.3899 17.5 21.0585V12.1612C15.243 11.8672 13.5 9.93716 13.5 7.6V3.6C13.5 3.26863 13.7686 3 14.1 3Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconRestaurantThin);
export default ForwardRef;
