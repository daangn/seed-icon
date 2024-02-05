import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconListSelectFill = (
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
          d="M4 4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6H18C18.5523 6 19 5.55228 19 5C19 4.44772 18.5523 4 18 4H4Z"
          fill="currentColor"
        />
        <path
          d="M4 10C3.44772 10 3 10.4477 3 11C3 11.5523 3.44772 12 4 12H18C18.5523 12 19 11.5523 19 11C19 10.4477 18.5523 10 18 10H4Z"
          fill="currentColor"
        />
        <path
          d="M3 17C3 16.4477 3.44772 16 4 16H10C10.5523 16 11 16.4477 11 17C11 17.5523 10.5523 18 10 18H4C3.44772 18 3 17.5523 3 17Z"
          fill="currentColor"
        />
        <path
          d="M21.8043 14.5943C22.1325 14.1501 22.0385 13.524 21.5943 13.1958C21.1501 12.8676 20.524 12.9616 20.1957 13.4058L16.5094 18.3949L14.7599 16.35C14.4008 15.9303 13.7696 15.8812 13.3499 16.2402C12.9303 16.5992 12.8811 17.2305 13.2402 17.6502L15.8068 20.6502C16.0049 20.8817 16.2978 21.0103 16.6024 20.9994C16.9069 20.9886 17.1899 20.8394 17.371 20.5943L21.8043 14.5943Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconListSelectFill);
export default ForwardRef;
