import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconNearMeRegular = (
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
    data-seed-icon-version="0.6.0"
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
          d="M11.9997 6.1001C9.90102 6.1001 8.19971 7.80142 8.19971 9.9001C8.19971 11.9988 9.90102 13.7001 11.9997 13.7001C14.0984 13.7001 15.7997 11.9988 15.7997 9.9001C15.7997 7.80142 14.0984 6.1001 11.9997 6.1001ZM9.79971 9.9001C9.79971 8.68507 10.7847 7.7001 11.9997 7.7001C13.2147 7.7001 14.1997 8.68507 14.1997 9.9001C14.1997 11.1151 13.2147 12.1001 11.9997 12.1001C10.7847 12.1001 9.79971 11.1151 9.79971 9.9001Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9997 0.600098C6.87855 0.600098 2.69971 4.67424 2.69971 9.73333C2.69971 13.3605 5.04498 16.2298 7.2247 18.1257C8.32939 19.0865 9.43029 19.8316 10.2535 20.3362C10.4112 20.4329 10.5589 20.5209 10.695 20.6001H5.8C5.35817 20.6001 5 20.9583 5 21.4001C5 21.8419 5.35817 22.2001 5.8 22.2001H18.2C18.6418 22.2001 19 21.8419 19 21.4001C19 20.9583 18.6418 20.6001 18.2 20.6001H13.3044C13.4405 20.5209 13.5883 20.4329 13.7459 20.3362C14.5691 19.8316 15.67 19.0865 16.7747 18.1257C18.9544 16.2298 21.2997 13.3605 21.2997 9.73333C21.2997 4.67424 17.1209 0.600098 11.9997 0.600098ZM4.29971 9.73333C4.29971 5.58762 7.73218 2.2001 11.9997 2.2001C16.2672 2.2001 19.6997 5.58762 19.6997 9.73333C19.6997 12.6537 17.7949 15.1178 15.7247 16.9184C14.7044 17.8058 13.6803 18.4998 12.9097 18.9721C12.5337 19.2026 12.2202 19.3791 11.9997 19.4983C11.7792 19.3791 11.4657 19.2026 11.0897 18.9721C10.3191 18.4998 9.29503 17.8058 8.27472 16.9184C6.20454 15.1178 4.29971 12.6537 4.29971 9.73333Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconNearMeRegular);
export default ForwardRef;
