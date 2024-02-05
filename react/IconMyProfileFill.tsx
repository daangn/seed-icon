import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMyProfileFill = (
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
    <g clipPath="url(#clip0_8999_1646)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5461 20.4111C21.8504 18.3424 23.3 15.3404 23.3 12C23.3 5.75913 18.2408 0.699951 12 0.699951C5.75913 0.699951 0.699951 5.75913 0.699951 12C0.699951 15.1204 1.96475 17.9454 4.00964 19.9903C4.15389 20.1345 4.30203 20.2749 4.45387 20.4112C6.45457 22.2073 9.09966 23.3 12 23.3C14.9003 23.3 17.5454 22.2073 19.5461 20.4111ZM18.9152 18.8021C17.1556 20.5908 14.7073 21.7 12 21.7C9.2926 21.7 6.8443 20.5908 5.08468 18.8021C6.05383 17.0871 7.85709 15.7587 10.0746 15.2614C10.4015 15.1881 10.6481 14.9188 10.6925 14.5868C10.7369 14.2547 10.5697 13.9302 10.2735 13.7736C9.09807 13.1521 8.29998 11.9186 8.29998 10.5C8.29998 8.4566 9.95653 6.80005 12 6.80005C14.0434 6.80005 15.7 8.4566 15.7 10.5C15.7 11.9186 14.9019 13.1521 13.7265 13.7736C13.4303 13.9302 13.2631 14.2547 13.3075 14.5868C13.3519 14.9188 13.5985 15.1881 13.9253 15.2614C16.1433 15.7588 17.946 17.0872 18.9152 18.8021Z"
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
const ForwardRef = forwardRef(IconMyProfileFill);
export default ForwardRef;
