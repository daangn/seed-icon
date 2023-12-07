import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPushpinRegular = (
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
    data-seed-icon-version="0.5.3"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M7.35885 14.6582C6.44267 15.6883 1.39683 21.4236 2.04011 22.0668C2.6834 22.7101 8.43059 17.6763 9.46289 16.7622L7.35885 14.6582Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.7428 5.53074C13.7511 6.03884 13.5175 6.52074 13.1134 6.82899L9.32069 9.72171C8.9193 10.0279 8.39722 10.1265 7.91223 9.98836C7.90791 9.98722 7.89549 9.984 7.8757 9.97941C7.8355 9.97009 7.7664 9.95542 7.67429 9.94088C7.48736 9.91137 7.22168 9.8849 6.91994 9.89802C6.40427 9.92044 5.85621 10.0519 5.37864 10.4152L13.6915 18.728C14.0547 18.2505 14.186 17.7026 14.2085 17.187C14.2216 16.8852 14.1951 16.6196 14.1656 16.4326C14.1511 16.3405 14.1364 16.2714 14.1271 16.2312C14.1225 16.2114 14.1193 16.199 14.1181 16.1947C13.98 15.7097 14.0786 15.1876 14.3848 14.7862L17.2775 10.9935C17.5859 10.5891 18.0683 10.3555 18.5767 10.3641L18.585 10.3641C18.5953 10.3642 18.6135 10.3642 18.6386 10.364C18.6889 10.3636 18.7663 10.3621 18.8637 10.358C19.061 10.3495 19.3277 10.3305 19.611 10.2894C19.8877 10.2492 20.1463 10.1929 20.3581 10.1211L13.9857 3.74857C13.9139 3.9603 13.8576 4.21887 13.8175 4.49545C13.7764 4.77879 13.7573 5.04538 13.7489 5.24266C13.7448 5.34005 13.7433 5.41744 13.7429 5.46778C13.7427 5.49288 13.7427 5.51103 13.7428 5.52134L13.7428 5.53074ZM13.7428 5.53074L13.7428 5.52814L13.7428 5.53074ZM15.657 15.7565C15.657 15.7565 16.4069 18.3064 14.607 20.1063C14.11 20.6034 13.3041 20.6034 12.8071 20.1063L4.00035 11.2996C3.50332 10.8026 3.50354 9.99651 4.00057 9.49947C5.80049 7.69955 8.35037 8.44952 8.35037 8.44952L12.1431 5.55679C12.1431 5.55679 12.1 3.19998 12.9999 2.30002C13.497 1.80299 14.3028 1.80299 14.7999 2.30002L21.8067 9.30684C22.3037 9.80387 22.3037 10.6097 21.8067 11.1068C20.9067 12.0067 18.5497 11.9639 18.5497 11.9639L15.657 15.7565Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPushpinRegular);
export default ForwardRef;
