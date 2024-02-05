import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconProfileBadgeRegular = (
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
        d="M4.8002 9.3332C4.8002 5.35675 8.02375 2.1332 12.0002 2.1332C15.9766 2.1332 19.2002 5.35675 19.2002 9.3332C19.2002 13.3097 15.9766 16.5332 12.0002 16.5332C8.02375 16.5332 4.8002 13.3097 4.8002 9.3332ZM12.0002 0.533203C7.14009 0.533203 3.2002 4.4731 3.2002 9.3332C3.2002 11.8082 4.22197 14.0446 5.8667 15.6435V22.6665C5.8667 22.9438 6.01026 23.2013 6.24611 23.3471C6.48197 23.4928 6.77648 23.5061 7.02447 23.3821L12 20.8943L16.9756 23.3821C17.2236 23.5061 17.5181 23.4928 17.754 23.3471C17.9898 23.2013 18.1334 22.9438 18.1334 22.6665V15.6439C19.7783 14.0449 20.8002 11.8084 20.8002 9.3332C20.8002 4.4731 16.8603 0.533203 12.0002 0.533203ZM16.5334 16.8773C15.2094 17.6746 13.6583 18.1332 12.0002 18.1332C10.3419 18.1332 8.79077 17.6745 7.4667 16.8771V21.3721L11.6423 19.2843C11.8675 19.1717 12.1326 19.1717 12.3578 19.2843L16.5334 21.3721V16.8773Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconProfileBadgeRegular);
export default ForwardRef;
