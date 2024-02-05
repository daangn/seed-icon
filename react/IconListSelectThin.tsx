import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconListSelectThin = (
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
          d="M3.4999 3.8999C3.16853 3.8999 2.8999 4.16853 2.8999 4.4999C2.8999 4.83127 3.16853 5.0999 3.4999 5.0999H17.4999C17.8313 5.0999 18.0999 4.83127 18.0999 4.4999C18.0999 4.16853 17.8313 3.8999 17.4999 3.8999H3.4999Z"
          fill="currentColor"
        />
        <path
          d="M3.4999 9.8999C3.16853 9.8999 2.8999 10.1685 2.8999 10.4999C2.8999 10.8313 3.16853 11.0999 3.4999 11.0999H17.4999C17.8313 11.0999 18.0999 10.8313 18.0999 10.4999C18.0999 10.1685 17.8313 9.8999 17.4999 9.8999H3.4999Z"
          fill="currentColor"
        />
        <path
          d="M2.8999 16.4999C2.8999 16.1685 3.16853 15.8999 3.4999 15.8999H9.4999C9.83127 15.8999 10.0999 16.1685 10.0999 16.4999C10.0999 16.8313 9.83127 17.0999 9.4999 17.0999H3.4999C3.16853 17.0999 2.8999 16.8313 2.8999 16.4999Z"
          fill="currentColor"
        />
        <path
          d="M20.9825 13.8565C21.1794 13.59 21.123 13.2143 20.8565 13.0174C20.59 12.8205 20.2143 12.8769 20.0174 13.1434L16.0322 18.5368L13.9558 16.1099C13.7404 15.8581 13.3616 15.8286 13.1099 16.044C12.8581 16.2595 12.8286 16.6382 13.044 16.89L15.6107 19.89C15.7295 20.0289 15.9053 20.1061 16.088 20.0996C16.2707 20.093 16.4405 20.0036 16.5491 19.8565L20.9825 13.8565Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconListSelectThin);
export default ForwardRef;
