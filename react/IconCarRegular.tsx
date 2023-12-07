import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarRegular = (
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
    data-seed-icon-version="0.5.3"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M21.37 11.9098C21.08 11.6998 20.77 11.5098 20.44 11.3198L20.16 9.79977H21.5C21.94 9.79977 22.2999 9.43977 22.2999 8.99977C22.2999 8.55977 21.94 8.19977 21.5 8.19977H19.87L19.35 5.38977C19.22 4.68977 18.7099 4.10977 18 3.88977C16.2299 3.32977 14.18 3.00977 12 3.00977C9.81995 3.00977 7.76995 3.32977 5.99995 3.88977C5.29995 4.10977 4.77995 4.68977 4.64995 5.38977L4.12995 8.19977H2.49995C2.05995 8.19977 1.69995 8.55977 1.69995 8.99977C1.69995 9.43977 2.05995 9.79977 2.49995 9.79977H3.83995L3.55995 11.3198C3.22995 11.5098 2.90995 11.6998 2.61995 11.9098C2.06995 12.2998 1.74995 12.9398 1.74995 13.6198V21.0998C1.74995 21.3898 1.97995 21.6198 2.26995 21.6198H7.99995C8.28995 21.6198 8.51995 21.3898 8.51995 21.0998V19.6298H15.49V21.0998C15.49 21.3898 15.72 21.6198 16.01 21.6198H21.74C22.03 21.6198 22.26 21.3898 22.26 21.0998V13.6198C22.26 12.9398 21.9399 12.2998 21.3899 11.9098H21.37ZM6.21995 5.67977C6.23995 5.55977 6.33995 5.45977 6.46995 5.41977C8.14995 4.89977 10.05 4.61977 11.99 4.61977C13.93 4.61977 15.84 4.89977 17.51 5.41977C17.64 5.45977 17.74 5.55977 17.76 5.67977L18.65 10.4998C16.74 9.75977 14.45 9.32977 11.98 9.32977C9.50995 9.32977 7.22995 9.75977 5.31995 10.4998L6.19995 5.67977H6.21995ZM20.6399 20.0298H17.07V18.0298H6.90995V20.0298H3.33995V13.6298C3.33995 13.4598 3.40995 13.3098 3.53995 13.2198C5.58995 11.7698 8.66995 10.9298 11.99 10.9298C15.31 10.9298 18.39 11.7598 20.44 13.2198C20.57 13.3098 20.6399 13.4598 20.6399 13.6298V20.0298Z"
          fill="currentColor"
        />
        <path
          d="M7.59995 13.5798C6.84995 13.5798 6.24995 14.1798 6.24995 14.9298C6.24995 15.6798 6.84995 16.2798 7.59995 16.2798C8.34995 16.2798 8.94995 15.6798 8.94995 14.9298C8.94995 14.1798 8.34995 13.5798 7.59995 13.5798Z"
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
const ForwardRef = forwardRef(IconCarRegular);
export default ForwardRef;
