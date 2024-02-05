import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCouponThin = (
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
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.9999 3.3999C1.66853 3.3999 1.3999 3.66853 1.3999 3.9999V9.05991C1.3999 9.33659 1.58909 9.57739 1.8579 9.64287C2.67068 9.84085 3.3999 10.7588 3.3999 11.9999C3.3999 13.241 2.67068 14.159 1.8579 14.3569C1.58909 14.4224 1.3999 14.6632 1.3999 14.9399V19.9999C1.3999 20.3313 1.66853 20.5999 1.9999 20.5999H21.9999C22.3313 20.5999 22.5999 20.3313 22.5999 19.9999V14.9399C22.5999 14.6632 22.4107 14.4224 22.1419 14.3569C21.3291 14.159 20.5999 13.241 20.5999 11.9999C20.5999 10.7588 21.3291 9.84085 22.1419 9.64287C22.4107 9.57739 22.5999 9.33659 22.5999 9.05991V3.9999C22.5999 3.66853 22.3313 3.3999 21.9999 3.3999H1.9999ZM2.5999 8.63149V4.5999H8V6.99988H9.33333V4.5999H21.3999V8.63149C20.1867 9.16099 19.3999 10.5174 19.3999 11.9999C19.3999 13.4824 20.1867 14.8388 21.3999 15.3683V19.3999H9.33333V16.9999H8V19.3999H2.5999V15.3683C3.81309 14.8388 4.5999 13.4824 4.5999 11.9999C4.5999 10.5174 3.81309 9.16099 2.5999 8.63149Z"
          fill="currentColor"
        />
        <path d="M8 10H9.33333V14H8V10Z" fill="currentColor" />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCouponThin);
export default ForwardRef;
