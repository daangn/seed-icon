import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconRefundThin = (
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
    data-seed-icon-version="0.5.0"
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
          d="M23.428 11.831C23.6619 12.0657 23.6628 12.4471 23.4299 12.6829L21.4234 14.7151C21.3113 14.8287 21.1589 14.8926 20.9999 14.8926C20.8409 14.8926 20.6885 14.8287 20.5764 14.7151L18.5699 12.6829C18.337 12.4471 18.3379 12.0657 18.5718 11.831C18.8058 11.5963 19.1841 11.5972 19.4169 11.833L20.9999 13.4362L22.5829 11.833C22.8157 11.5972 23.194 11.5963 23.428 11.831Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.9999 2.5999C5.80843 2.5999 1.5999 6.80843 1.5999 11.9999C1.5999 17.1914 5.80843 21.3999 10.9999 21.3999C12.9979 21.3999 14.8486 20.7772 16.3709 19.7154C16.6427 19.5258 17.0167 19.5924 17.2063 19.8642C17.3959 20.136 17.3292 20.51 17.0574 20.6996C15.3403 21.8974 13.2512 22.5999 10.9999 22.5999C5.14568 22.5999 0.399902 17.8541 0.399902 11.9999C0.399902 6.14568 5.14568 1.3999 10.9999 1.3999C16.8541 1.3999 21.5999 6.14568 21.5999 11.9999C21.5999 12.5134 21.5633 13.0188 21.4926 13.5134C21.4457 13.8415 21.1417 14.0694 20.8137 14.0224C20.4856 13.9755 20.2578 13.6715 20.3047 13.3435C20.3674 12.905 20.3999 12.4564 20.3999 11.9999C20.3999 6.80843 16.1914 2.5999 10.9999 2.5999Z"
          fill="currentColor"
        />
        <path
          d="M14.1495 9.219C14.4704 9.30153 14.6637 9.62859 14.5811 9.94952L14.1568 11.5999H14.9999C15.3313 11.5999 15.5999 11.8685 15.5999 12.1999C15.5999 12.5312 15.3313 12.7999 14.9999 12.7999H13.8482L13.2954 14.9495C13.2294 15.2062 13.0028 15.3892 12.7379 15.3996C12.473 15.41 12.2327 15.2454 12.1468 14.9947L11.3942 12.7999H10.6058L9.85333 14.9947C9.76736 15.2454 9.52705 15.41 9.26219 15.3996C8.99732 15.3892 8.77068 15.2062 8.70467 14.9495L8.15189 12.7999H6.9999C6.66853 12.7999 6.3999 12.5312 6.3999 12.1999C6.3999 11.8685 6.66853 11.5999 6.9999 11.5999H7.84332L7.41895 9.94952C7.33643 9.62859 7.52969 9.30153 7.85062 9.219C8.17155 9.13648 8.49862 9.32974 8.58114 9.65067L9.08236 11.5999H9.7487L10.4325 9.6055C10.5156 9.36299 10.7437 9.2001 11 9.2001C11.2564 9.2001 11.4845 9.36299 11.5676 9.6055L12.2514 11.5999H12.9177L13.419 9.65067C13.5015 9.32974 13.8285 9.13648 14.1495 9.219Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconRefundThin);
export default ForwardRef;
