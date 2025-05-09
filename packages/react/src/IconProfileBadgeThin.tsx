/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconProfileBadgeThin = (
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
    data-seed-icon-version="0.7.3"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9999 0.733398C7.25025 0.733398 3.3999 4.58375 3.3999 9.3334C3.3999 11.7827 4.42379 13.9928 6.06689 15.5591V22.6667C6.06689 22.8747 6.17457 23.0678 6.35146 23.1771C6.52835 23.2864 6.74923 23.2964 6.93522 23.2034L12.0002 20.6709L17.0652 23.2034C17.2512 23.2964 17.4721 23.2864 17.649 23.1771C17.8259 23.0678 17.9336 22.8747 17.9336 22.6667V15.5585C19.5763 13.9922 20.5999 11.7824 20.5999 9.3334C20.5999 4.58375 16.7496 0.733398 11.9999 0.733398ZM4.5999 9.3334C4.5999 5.24649 7.913 1.9334 11.9999 1.9334C16.0868 1.9334 19.3999 5.24649 19.3999 9.3334C19.3999 13.4203 16.0868 16.7334 11.9999 16.7334C7.913 16.7334 4.5999 13.4203 4.5999 9.3334ZM16.7336 16.5145C15.3758 17.4113 13.7488 17.9334 11.9999 17.9334C10.2512 17.9334 8.62449 17.4115 7.26689 16.515V21.6959L11.7319 19.4634C11.9008 19.379 12.0996 19.379 12.2686 19.4634L16.7336 21.6959V16.5145Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconProfileBadgeThin);
export default ForwardRef;
