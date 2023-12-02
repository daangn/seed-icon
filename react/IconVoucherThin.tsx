import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconVoucherThin = (
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
    data-seed-icon-version="0.4.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.68958 1.40438C9.59501 1.4552 10.4908 1.93779 11.2716 2.90752C11.5807 3.29155 11.818 3.70319 12 4.12418C12.182 3.70319 12.4193 3.29155 12.7284 2.90752C13.5092 1.93779 14.405 1.4552 15.3104 1.40438C16.2048 1.35417 17.0075 1.73133 17.6006 2.28163C18.1472 2.78872 18.5671 3.50573 18.5982 4.35312C18.6298 5.21177 18.2588 6.10164 17.4189 6.93623C17.2459 7.10813 17.0515 7.26205 16.8422 7.3999L20.9999 7.39991C21.8836 7.39991 22.5999 8.11625 22.5999 8.99991V11.9999C22.5999 12.8836 21.8836 13.5999 20.9999 13.5999H20.5999L20.5999 20.9999C20.5999 21.8836 19.8836 22.5999 18.9999 22.5999H9.9999L9.99868 22.5999H4.9999C4.11625 22.5999 3.3999 21.8836 3.3999 20.9999L3.3999 13.5999H2.9999C2.11625 13.5999 1.3999 12.8836 1.3999 11.9999V8.9999C1.3999 8.11625 2.11625 7.3999 2.9999 7.3999L7.15783 7.3999C6.94854 7.26205 6.75408 7.10813 6.58108 6.93623C5.74118 6.10164 5.37017 5.21177 5.40176 4.35312C5.43293 3.50573 5.85283 2.78872 6.39939 2.28163C6.99254 1.73133 7.79517 1.35417 8.68958 1.40438ZM8.62233 2.60249C8.11789 2.57418 7.62159 2.78463 7.21556 3.16134C6.84921 3.50122 6.61798 3.93413 6.60095 4.39723C6.58433 4.84909 6.76804 5.4303 7.42692 6.08502C7.90605 6.56112 8.72961 6.90192 9.65133 7.11789C10.2716 7.26322 10.8916 7.34196 11.395 7.37702C11.3702 6.19108 11.2218 4.75923 10.3368 3.66005C9.71869 2.89225 9.11576 2.63019 8.62233 2.60249ZM11.9999 8.59993L11.9795 8.5999H10.5999L10.5999 12.3999H13.3999L13.3999 8.5999H12.0204C12.0136 8.59992 12.0067 8.59993 11.9999 8.59993ZM10.5999 13.5999L10.5999 21.3999H13.3999L13.3999 13.5999L10.5999 13.5999ZM9.3999 13.5999L9.3999 21.3999H4.9999C4.77899 21.3999 4.5999 21.2208 4.5999 20.9999L4.5999 13.5999L9.3999 13.5999ZM9.3999 8.5999L9.3999 12.3999L2.9999 12.3999C2.77899 12.3999 2.5999 12.2208 2.5999 11.9999L2.5999 8.9999C2.5999 8.77899 2.77899 8.5999 2.9999 8.5999L9.3999 8.5999ZM14.5999 8.5999L14.5999 12.3999H20.9999C21.2208 12.3999 21.3999 12.2208 21.3999 11.9999V8.99991C21.3999 8.77899 21.2208 8.59991 20.9999 8.59991L14.5999 8.5999ZM14.5999 13.5999L14.5999 21.3999H18.9999C19.2208 21.3999 19.3999 21.2208 19.3999 20.9999V13.5999L14.5999 13.5999ZM16.7844 3.16134C16.3784 2.78463 15.8821 2.57418 15.3777 2.60249C14.8842 2.63019 14.2813 2.89225 13.6632 3.66005C12.7782 4.75923 12.6298 6.19108 12.605 7.37702C13.1084 7.34196 13.7284 7.26322 14.3487 7.11789C15.2704 6.90192 16.094 6.56112 16.5731 6.08502C17.232 5.4303 17.4157 4.84909 17.3991 4.39723C17.382 3.93413 17.1508 3.50122 16.7844 3.16134Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconVoucherThin);
export default ForwardRef;
