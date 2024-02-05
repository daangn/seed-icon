import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconBoldRegular = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.99995 3.2002C6.55812 3.2002 6.19995 3.55837 6.19995 4.0002V20.0002C6.19995 20.442 6.55812 20.8002 6.99995 20.8002H13.0851C15.689 20.8002 17.8 18.6893 17.8 16.0853C17.8 14.1714 16.6994 12.5146 15.0966 11.7133C16.1373 10.8484 16.8 9.54424 16.8 8.0853C16.8 5.38733 14.6128 3.2002 11.9148 3.2002H6.99995ZM12.0851 11.2002C13.8054 11.2002 15.2 9.80561 15.2 8.0853C15.2 6.27099 13.7292 4.8002 11.9148 4.8002H7.79995V11.2002H12.0851ZM7.79995 12.8002V19.2002H13.0851C14.8054 19.2002 16.2 17.8056 16.2 16.0853C16.2 14.271 14.7292 12.8002 12.9148 12.8002H7.79995Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconBoldRegular);
export default ForwardRef;
