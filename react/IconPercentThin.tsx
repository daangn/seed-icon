import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPercentThin = (
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
    <g>
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.33323 9.33338C8.4378 9.33338 9.33323 8.43794 9.33323 7.33338C9.33323 6.22881 8.4378 5.33337 7.33323 5.33337C6.22866 5.33337 5.33323 6.22881 5.33323 7.33338C5.33323 8.43794 6.22866 9.33338 7.33323 9.33338ZM7.33323 10.6667C9.17418 10.6667 10.6666 9.17432 10.6666 7.33338C10.6666 5.49243 9.17418 4.00004 7.33323 4.00004C5.49228 4.00004 3.9999 5.49243 3.9999 7.33338C3.9999 9.17432 5.49228 10.6667 7.33323 10.6667Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.6666 18.6667C17.7711 18.6667 18.6666 17.7713 18.6666 16.6667C18.6666 15.5621 17.7711 14.6667 16.6666 14.6667C15.562 14.6667 14.6666 15.5621 14.6666 16.6667C14.6666 17.7713 15.562 18.6667 16.6666 18.6667ZM16.6666 20C18.5075 20 19.9999 18.5077 19.9999 16.6667C19.9999 14.8258 18.5075 13.3334 16.6666 13.3334C14.8256 13.3334 13.3332 14.8258 13.3332 16.6667C13.3332 18.5077 14.8256 20 16.6666 20Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.87104 20.0714C3.61069 19.8111 3.61069 19.389 3.87104 19.1286L19.1655 3.83418C19.4259 3.57383 19.848 3.57383 20.1083 3.83418C20.3687 4.09453 20.3687 4.51664 20.1083 4.77699L4.81385 20.0714C4.5535 20.3318 4.13139 20.3318 3.87104 20.0714Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPercentThin);
export default ForwardRef;
