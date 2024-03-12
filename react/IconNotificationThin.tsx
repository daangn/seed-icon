import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconNotificationThin = (
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
    data-seed-icon-version="0.5.8"
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
          d="M4.6499 8.7999C4.6499 4.72138 7.94062 1.3999 11.9999 1.3999C16.0592 1.3999 19.3499 4.72138 19.3499 8.7999V14.286L21.5003 17.5354C21.5653 17.6337 21.5999 17.7488 21.5999 17.8666V18.9999C21.5999 19.3313 21.3313 19.5999 20.9999 19.5999H2.9999C2.66853 19.5999 2.3999 19.3313 2.3999 18.9999V17.8666C2.3999 17.7488 2.43456 17.6337 2.49954 17.5354L4.6499 14.286V8.7999ZM11.9999 2.5999C8.61169 2.5999 5.8499 5.37576 5.8499 8.7999V14.4666C5.8499 14.5843 5.81525 14.6995 5.75026 14.7977L3.5999 18.0471V18.3999H20.3999V18.0471L18.2495 14.7977C18.1846 14.6995 18.1499 14.5843 18.1499 14.4666V8.7999C18.1499 5.37576 15.3881 2.5999 11.9999 2.5999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.44042 18.9751C9.45372 18.6536 9.71819 18.3999 10.0399 18.3999H13.9999C14.3313 18.3999 14.5999 18.6685 14.5999 18.9999V19.966C14.5999 21.4065 13.4407 22.5999 11.9999 22.5999C10.5591 22.5999 9.3999 21.4065 9.3999 19.966C9.3999 19.9577 9.40007 19.9494 9.40042 19.9412L9.44042 18.9751ZM10.6156 19.5999L10.5999 19.9774C10.606 20.7689 11.2444 21.3999 11.9999 21.3999C12.7591 21.3999 13.3999 20.7628 13.3999 19.966V19.5999H10.6156Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconNotificationThin);
export default ForwardRef;
