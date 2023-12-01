import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPhotoEditRegular = (
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
    data-seed-icon-version="0.4.0"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M13.2161 3.0001C13.2161 2.50304 12.8132 2.1001 12.3161 2.1001C11.8191 2.1001 11.4161 2.50304 11.4161 3.0001V6.0001C11.4161 6.49715 11.8191 6.9001 12.3161 6.9001C12.8132 6.9001 13.2161 6.49715 13.2161 6.0001V3.0001Z"
          fill="currentColor"
        />
        <path
          d="M18.9143 6.10615C19.2658 5.75468 19.2658 5.18483 18.9143 4.83336C18.5629 4.48188 17.993 4.48188 17.6415 4.83336L15.5202 6.95468C15.1687 7.30615 15.1687 7.876 15.5202 8.22747C15.8717 8.57894 16.4415 8.57894 16.793 8.22747L18.9143 6.10615Z"
          fill="currentColor"
        />
        <path
          d="M21.6476 11.432C21.6476 11.929 21.2446 12.332 20.7476 12.332H17.7476C17.2505 12.332 16.8476 11.929 16.8476 11.432C16.8476 10.9349 17.2505 10.532 17.7476 10.532H20.7476C21.2446 10.532 21.6476 10.9349 21.6476 11.432Z"
          fill="currentColor"
        />
        <path
          d="M17.6417 18.0306C17.9932 18.3821 18.563 18.3821 18.9145 18.0306C19.266 17.6792 19.266 17.1093 18.9145 16.7578L16.7932 14.6365C16.4417 14.285 15.8718 14.285 15.5204 14.6365C15.1689 14.988 15.1689 15.5578 15.5204 15.9093L17.6417 18.0306Z"
          fill="currentColor"
        />
        <path
          d="M12.3159 20.7639C11.8189 20.7639 11.4159 20.361 11.4159 19.8639V16.8639C11.4159 16.3669 11.8189 15.9639 12.3159 15.9639C12.813 15.9639 13.2159 16.3669 13.2159 16.8639V19.8639C13.2159 20.361 12.813 20.7639 12.3159 20.7639Z"
          fill="currentColor"
        />
        <path
          d="M1.71722 20.7579C1.36575 21.1093 1.36575 21.6792 1.71722 22.0307C2.06869 22.3821 2.63854 22.3821 2.99001 22.0307L9.11133 15.9093C9.4628 15.5579 9.4628 14.988 9.11133 14.6365C8.75986 14.2851 8.19001 14.2851 7.83854 14.6365L1.71722 20.7579Z"
          fill="currentColor"
        />
        <path
          d="M2.98398 11.432C2.98398 10.935 3.38693 10.532 3.88398 10.532H6.88398C7.38104 10.532 7.78398 10.935 7.78398 11.432C7.78398 11.9291 7.38104 12.332 6.88398 12.332H3.88398C3.38693 12.332 2.98398 11.9291 2.98398 11.432Z"
          fill="currentColor"
        />
        <path
          d="M6.98985 4.83339C6.63838 4.48192 6.06853 4.48192 5.71706 4.83339C5.36559 5.18486 5.36559 5.75471 5.71706 6.10618L7.83838 8.2275C8.18985 8.57898 8.7597 8.57898 9.11117 8.2275C9.46264 7.87603 9.46264 7.30618 9.11117 6.95471L6.98985 4.83339Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPhotoEditRegular);
export default ForwardRef;
