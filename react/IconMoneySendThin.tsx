import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMoneySendThin = (
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
          d="M3.21953 11.9999C3.21953 7.15064 7.15064 3.21953 11.9999 3.21953C16.8492 3.21953 20.7803 7.15064 20.7803 11.9999C20.7803 12.3441 20.7605 12.6835 20.7221 13.0169C20.6841 13.3461 20.9202 13.6437 21.2494 13.6817C21.5786 13.7196 21.8762 13.4835 21.9142 13.1543C21.9579 12.7753 21.9803 12.3901 21.9803 11.9999C21.9803 6.4879 17.5119 2.01953 11.9999 2.01953C6.4879 2.01953 2.01953 6.4879 2.01953 11.9999C2.01953 17.5119 6.4879 21.9803 11.9999 21.9803C12.6929 21.9803 13.3699 21.9096 14.0241 21.7748C14.3486 21.7079 14.5575 21.3906 14.4906 21.066C14.4238 20.7415 14.1064 20.5326 13.7819 20.5995C13.207 20.7179 12.611 20.7803 11.9999 20.7803C7.15064 20.7803 3.21953 16.8492 3.21953 11.9999Z"
          fill="currentColor"
        />
        <path
          d="M15.1495 9.219C15.4704 9.30153 15.6637 9.62859 15.5811 9.94952L15.1568 11.5999H15.9999C16.3313 11.5999 16.5999 11.8685 16.5999 12.1999C16.5999 12.5312 16.3313 12.7999 15.9999 12.7999H14.8482L14.2954 14.9495C14.2294 15.2062 14.0028 15.3892 13.7379 15.3996C13.473 15.41 13.2327 15.2454 13.1468 14.9947L12.3942 12.7999H11.6058L10.8533 14.9947C10.7674 15.2454 10.527 15.41 10.2622 15.3996C9.99732 15.3892 9.77068 15.2062 9.70467 14.9495L9.15189 12.7999H7.9999C7.66853 12.7999 7.3999 12.5312 7.3999 12.1999C7.3999 11.8685 7.66853 11.5999 7.9999 11.5999H8.84332L8.41895 9.94952C8.33643 9.62859 8.52969 9.30153 8.85062 9.219C9.17155 9.13648 9.49862 9.32974 9.58114 9.65067L10.0824 11.5999H10.7487L11.4325 9.6055C11.5156 9.36299 11.7437 9.2001 12 9.2001C12.2564 9.2001 12.4845 9.36299 12.5676 9.6055L13.2514 11.5999H13.9177L14.419 9.65067C14.5015 9.32974 14.8285 9.13648 15.1495 9.219Z"
          fill="currentColor"
        />
        <path
          d="M15.3999 18.4015C15.3999 18.0701 15.6685 17.8015 15.9999 17.8015H20.5512L18.5756 15.826C18.3413 15.5917 18.3413 15.2118 18.5756 14.9774C18.81 14.7431 19.1899 14.7431 19.4242 14.9774L22.4149 17.9682C22.5289 18.0774 22.5999 18.2312 22.5999 18.4015C22.5999 18.4612 22.5912 18.5188 22.575 18.5732C22.5475 18.6657 22.4972 18.7529 22.4242 18.826L19.4242 21.826C19.1899 22.0603 18.81 22.0603 18.5756 21.826C18.3413 21.5917 18.3413 21.2118 18.5756 20.9774L20.5516 19.0015H15.9999C15.6685 19.0015 15.3999 18.7329 15.3999 18.4015Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMoneySendThin);
export default ForwardRef;
