import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconProductRegular = (
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
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.25C9.34898 1.25 7.19995 3.39903 7.19995 6.05V6.0835H6.07277C5.07534 6.0835 4.23038 6.8184 4.09208 7.8062L2.31875 19.4729C2.15032 20.676 3.08459 21.7501 4.29943 21.7501H19.7004C20.9153 21.7501 21.8495 20.676 21.6811 19.4729L19.9078 7.8062C19.7695 6.81841 18.9245 6.0835 17.9271 6.0835H16.8V6.05C16.8 3.39903 14.6509 1.25 12 1.25ZM15.2 7.6835V9.04999C15.2 9.49182 15.5581 9.84999 16 9.84999C16.4418 9.84999 16.8 9.49182 16.8 9.04999V7.6835H17.9271C18.1266 7.6835 18.2956 7.83048 18.3232 8.02804L20.0966 19.6947C20.1302 19.9353 19.9434 20.1501 19.7004 20.1501H4.29943C4.05647 20.1501 3.86961 19.9353 3.9033 19.6947L5.67663 8.02803C5.70429 7.83048 5.87328 7.6835 6.07277 7.6835H7.19995V9.04999C7.19995 9.49182 7.55812 9.84999 7.99995 9.84999C8.44178 9.84999 8.79995 9.49182 8.79995 9.04999V7.6835H15.2ZM15.2 6.0835V6.05C15.2 4.28269 13.7673 2.85 12 2.85C10.2326 2.85 8.79995 4.28269 8.79995 6.05V6.0835H15.2Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconProductRegular);
export default ForwardRef;
