/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconConfirmationThin = (
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
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.1785 2.24247C12.0661 2.18631 11.9337 2.18631 11.8213 2.24247L3.82125 6.23697C3.68561 6.3047 3.5999 6.44332 3.5999 6.59497V8.85101C3.5999 12.3325 4.33889 14.9471 5.71081 16.985C7.08425 19.025 9.13131 20.5456 11.8517 21.7681C11.9458 21.8104 12.054 21.8099 12.1455 21.7683C14.8488 20.5409 16.9027 18.8774 18.2839 16.7583C19.6648 14.6397 20.3999 12.0251 20.3999 8.85101V6.59497C20.3999 6.44332 20.3142 6.3047 20.1786 6.23697L12.1785 2.24247ZM11.2853 1.16849C11.7352 0.943838 12.2646 0.943837 12.7145 1.16849L20.7145 5.16299C21.2571 5.4339 21.5999 5.98837 21.5999 6.59497V8.85101C21.5999 12.2158 20.8183 15.0678 19.2892 17.4138C17.7605 19.7592 15.5112 21.5583 12.6415 22.8613C12.2338 23.0464 11.7659 23.0454 11.36 22.863C8.50776 21.5813 6.25185 19.9376 4.71547 17.6554C3.17758 15.3711 2.3999 12.5055 2.3999 8.85101V6.59497C2.3999 5.98837 2.74273 5.4339 3.28532 5.16299L11.2853 1.16849Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.4035 8.54058C16.6487 8.76355 16.6668 9.14313 16.4439 9.38839L11.4439 14.89C11.3335 15.0115 11.1782 15.0824 11.0142 15.0863C10.8501 15.0902 10.6917 15.0267 10.5756 14.9107L7.57564 11.9098C7.34132 11.6754 7.34132 11.2954 7.57564 11.061C7.80995 10.8266 8.18985 10.8266 8.42417 11.061L10.9792 13.6168L15.5559 8.58095C15.7788 8.33568 16.1583 8.31761 16.4035 8.54058Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconConfirmationThin);
export default ForwardRef;
