import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconListSelectRegular = (
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
          d="M3.49995 3.69995C3.05812 3.69995 2.69995 4.05812 2.69995 4.49995C2.69995 4.94178 3.05812 5.29995 3.49995 5.29995H17.5C17.9418 5.29995 18.3 4.94178 18.3 4.49995C18.3 4.05812 17.9418 3.69995 17.5 3.69995H3.49995Z"
          fill="currentColor"
        />
        <path
          d="M3.49995 9.69995C3.05812 9.69995 2.69995 10.0581 2.69995 10.5C2.69995 10.9418 3.05812 11.3 3.49995 11.3H17.5C17.9418 11.3 18.3 10.9418 18.3 10.5C18.3 10.0581 17.9418 9.69995 17.5 9.69995H3.49995Z"
          fill="currentColor"
        />
        <path
          d="M2.69995 16.5C2.69995 16.0581 3.05812 15.7 3.49995 15.7H9.49995C9.94178 15.7 10.3 16.0581 10.3 16.5C10.3 16.9418 9.94178 17.3 9.49995 17.3H3.49995C3.05812 17.3 2.69995 16.9418 2.69995 16.5Z"
          fill="currentColor"
        />
        <path
          d="M21.1434 13.9754C21.4059 13.6201 21.3307 13.1192 20.9754 12.8566C20.62 12.594 20.1191 12.6692 19.8566 13.0246L16.0208 18.2158L14.1078 15.9799C13.8206 15.6442 13.3156 15.6049 12.9799 15.8921C12.6442 16.1794 12.6049 16.6844 12.8921 17.0201L15.4588 20.0201C15.6172 20.2053 15.8515 20.3082 16.0952 20.2995C16.3388 20.2908 16.5652 20.1715 16.71 19.9754L21.1434 13.9754Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconListSelectRegular);
export default ForwardRef;
