import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarThin = (
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
          d="M21.37 11.9098C21.08 11.6998 20.77 11.5098 20.44 11.3198L20.12 9.59977H21.5C21.83 9.59977 22.1 9.32977 22.1 8.99977C22.1 8.66977 21.83 8.39977 21.5 8.39977H19.9L19.35 5.38977C19.22 4.68977 18.71 4.10977 18 3.88977C16.23 3.32977 14.18 3.00977 12 3.00977C9.82 3.00977 7.77 3.32977 6 3.88977C5.3 4.10977 4.78 4.68977 4.65 5.38977L4.1 8.39977H2.5C2.17 8.39977 1.9 8.66977 1.9 8.99977C1.9 9.32977 2.17 9.59977 2.5 9.59977H3.88L3.56 11.3198C3.23 11.5098 2.91 11.6998 2.62 11.9098C2.07 12.2998 1.75 12.9398 1.75 13.6198V21.0998C1.75 21.3898 1.98 21.6198 2.27 21.6198H8C8.29 21.6198 8.52 21.3898 8.52 21.0998V19.6298H15.49V21.0998C15.49 21.3898 15.72 21.6198 16.01 21.6198H21.74C22.03 21.6198 22.26 21.3898 22.26 21.0998V13.6198C22.26 12.9398 21.94 12.2998 21.39 11.9098H21.37ZM5.83 5.60977C5.88 5.34977 6.08 5.12977 6.36 5.03977C8.07 4.49977 10.02 4.21977 12 4.21977C13.98 4.21977 15.93 4.49977 17.64 5.03977C17.92 5.12977 18.12 5.33977 18.17 5.60977L19.1 10.6798C17.1 9.83977 14.66 9.32977 11.99 9.32977C9.32 9.32977 6.89 9.82977 4.89 10.6798L5.82 5.60977H5.83ZM21.04 15.5598V20.4298H16.67V18.4298H7.31V20.4298H2.95V13.6298C2.95 13.3298 3.09 13.0598 3.32 12.8898C5.43 11.3898 8.6 10.5298 12 10.5298C15.4 10.5298 18.57 11.3898 20.68 12.8898C20.91 13.0498 21.05 13.3298 21.05 13.6298V15.5598H21.04Z"
          fill="currentColor"
        />
        <path
          d="M7.6 13.5798C6.85 13.5798 6.25 14.1798 6.25 14.9298C6.25 15.6798 6.85 16.2798 7.6 16.2798C8.35 16.2798 8.95 15.6798 8.95 14.9298C8.95 14.1798 8.35 13.5798 7.6 13.5798Z"
          fill="currentColor"
        />
        <path
          d="M16.4 13.5798C15.65 13.5798 15.05 14.1798 15.05 14.9298C15.05 15.6798 15.65 16.2798 16.4 16.2798C17.15 16.2798 17.75 15.6798 17.75 14.9298C17.75 14.1798 17.15 13.5798 16.4 13.5798Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCarThin);
export default ForwardRef;
