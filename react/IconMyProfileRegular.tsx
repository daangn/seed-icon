import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMyProfileRegular = (
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
    data-seed-icon-version="0.4.0"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_8009_128)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5461 20.4111C17.5454 22.2073 14.9003 23.2999 12 23.2999C5.75913 23.2999 0.699951 18.2408 0.699951 12C0.699951 5.75913 5.75913 0.699951 12 0.699951C18.2408 0.699951 23.2999 5.75913 23.2999 12C23.2999 14.6798 22.3671 17.1418 20.8083 19.0789C20.4241 19.5564 20.0018 20.002 19.5461 20.4111ZM2.29995 12C2.29995 6.64279 6.64279 2.29995 12 2.29995C17.3571 2.29995 21.7 6.64279 21.7 12C21.7 14.042 21.0689 15.9367 19.9912 17.4997C19.0123 16.0353 17.5495 14.8746 15.8157 14.1781C16.7342 13.2255 17.3 11.9291 17.3 10.5C17.3 7.57284 14.9271 5.19995 12 5.19995C9.07287 5.19995 6.69998 7.57284 6.69998 10.5C6.69998 11.9291 7.26574 13.2254 8.18421 14.1781C6.45024 14.8747 4.98765 16.0353 4.00874 17.4998C2.931 15.9368 2.29995 14.0421 2.29995 12ZM5.08464 18.802C6.84427 20.5908 9.29258 21.7 12 21.7C14.7073 21.7 17.1557 20.5908 18.9153 18.802C17.9461 17.0871 16.1434 15.7587 13.9253 15.2613C13.5985 15.188 13.3519 14.9187 13.3075 14.5867C13.2631 14.2546 13.4303 13.9301 13.7265 13.7735C14.9019 13.152 15.7 11.9185 15.7 10.5C15.7 8.4565 14.0434 6.79995 12 6.79995C9.95653 6.79995 8.29998 8.4565 8.29998 10.5C8.29998 11.9185 9.09807 13.152 10.2735 13.7735C10.5697 13.9301 10.7369 14.2546 10.6925 14.5867C10.6481 14.9187 10.4015 15.188 10.0746 15.2613C7.85707 15.7586 6.05378 17.087 5.08464 18.802Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath>
        <rect width={24} height={24} fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(IconMyProfileRegular);
export default ForwardRef;
