import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconHeadphoneRegular = (
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
          d="M12.0002 2.69995C6.31166 2.69995 1.7002 7.31142 1.7002 13V17.5C1.7002 17.9418 2.05837 18.3 2.5002 18.3C2.94202 18.3 3.3002 17.9418 3.3002 17.5V13C3.3002 8.19507 7.19532 4.29995 12.0002 4.29995C16.8051 4.29995 20.7002 8.19507 20.7002 13V17.5C20.7002 17.9418 21.0584 18.3 21.5002 18.3C21.942 18.3 22.3002 17.9418 22.3002 17.5V13C22.3002 7.31142 17.6887 2.69995 12.0002 2.69995Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.6001 14C3.6001 13.282 4.18213 12.7 4.9001 12.7H6.4001C7.67035 12.7 8.7001 13.7297 8.7001 15V19C8.7001 20.2702 7.67035 21.3 6.4001 21.3H4.9001C4.18213 21.3 3.6001 20.7179 3.6001 20V14ZM5.2001 14.3V19.7H6.4001C6.7867 19.7 7.1001 19.3866 7.1001 19V15C7.1001 14.6134 6.7867 14.3 6.4001 14.3H5.2001Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.3999 14C20.3999 13.282 19.8179 12.7 19.0999 12.7H17.5999C16.3296 12.7 15.2999 13.7297 15.2999 15V19C15.2999 20.2702 16.3296 21.3 17.5999 21.3H19.0999C19.8179 21.3 20.3999 20.7179 20.3999 20V14ZM18.7999 14.3V19.7H17.5999C17.2133 19.7 16.8999 19.3866 16.8999 19V15C16.8999 14.6134 17.2133 14.3 17.5999 14.3H18.7999Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconHeadphoneRegular);
export default ForwardRef;
