import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconConfirmationPayThin = (
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
    data-seed-icon-version="0.5.7"
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
          d="M15.1494 9.21924C15.4703 9.30177 15.6636 9.62883 15.581 9.94976L15.1567 11.6001H15.9998C16.3312 11.6001 16.5998 11.8687 16.5998 12.2001C16.5998 12.5315 16.3312 12.8001 15.9998 12.8001H14.8481L14.2953 14.9498C14.2293 15.2065 14.0027 15.3895 13.7378 15.3999C13.4729 15.4103 13.2326 15.2457 13.1467 14.9949L12.3942 12.8001H11.6057L10.8532 14.9949C10.7673 15.2457 10.527 15.4103 10.2621 15.3999C9.99722 15.3895 9.77058 15.2065 9.70457 14.9498L9.1518 12.8001H7.9998C7.66843 12.8001 7.3998 12.5315 7.3998 12.2001C7.3998 11.8687 7.66843 11.6001 7.9998 11.6001H8.84323L8.41885 9.94976C8.33633 9.62883 8.52959 9.30177 8.85052 9.21924C9.17146 9.13672 9.49852 9.32998 9.58105 9.65092L10.0823 11.6001H10.7486L11.4324 9.60575C11.5155 9.36323 11.7436 9.20034 12 9.20034C12.2563 9.20034 12.4844 9.36323 12.5675 9.60575L13.2513 11.6001H13.9176L14.4189 9.65092C14.5014 9.32998 14.8284 9.13672 15.1494 9.21924Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconConfirmationPayThin);
export default ForwardRef;
