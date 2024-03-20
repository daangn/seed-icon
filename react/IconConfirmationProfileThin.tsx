import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconConfirmationProfileThin = (
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
          d="M12.8845 11.279C14.1036 11.5326 15.2246 12.31 15.8547 13.4064C16.1574 13.9301 15.9856 14.5438 15.4783 14.8629C14.5864 15.4193 13.2609 15.673 12.0008 15.673C10.7407 15.673 9.40693 15.4275 8.52323 14.8629C8.01592 14.5438 7.86045 13.9219 8.14684 13.4064C8.7687 12.31 9.89787 11.549 11.1171 11.279C10.3152 10.9353 9.75877 10.1416 9.75877 9.21698C9.75877 7.97324 10.7652 6.9668 12.0008 6.9668C13.2363 6.9668 14.2427 7.97324 14.2427 9.21698C14.2427 10.1416 13.6863 10.9353 12.8845 11.279Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.7145 1.16849C12.2646 0.943837 11.7352 0.943838 11.2853 1.16849L3.28532 5.16299C2.74273 5.4339 2.3999 5.98837 2.3999 6.59497V8.85101C2.3999 12.5055 3.17758 15.3711 4.71547 17.6554C6.25185 19.9376 8.50776 21.5813 11.36 22.863C11.7659 23.0454 12.2338 23.0464 12.6415 22.8613C15.5112 21.5583 17.7605 19.7592 19.2892 17.4138C20.8183 15.0678 21.5999 12.2158 21.5999 8.85101V6.59497C21.5999 5.98837 21.2571 5.4339 20.7145 5.16299L12.7145 1.16849ZM11.8213 2.24247C11.9337 2.18631 12.0661 2.18631 12.1785 2.24247L20.1786 6.23697C20.3142 6.3047 20.3999 6.44332 20.3999 6.59497V8.85101C20.3999 12.0251 19.6648 14.6397 18.2839 16.7583C16.9027 18.8774 14.8488 20.5409 12.1455 21.7683C12.054 21.8099 11.9458 21.8104 11.8517 21.7681C9.13131 20.5456 7.08425 19.025 5.71081 16.985C4.33889 14.9471 3.5999 12.3325 3.5999 8.85101V6.59497C3.5999 6.44332 3.68561 6.3047 3.82125 6.23697L11.8213 2.24247Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconConfirmationProfileThin);
export default ForwardRef;
