import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconInfoThin = (
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
      <g>
        <path
          d="M13.7852 15.6269C13.5985 15.5335 13.3853 15.6002 13.2519 15.7868C13.2281 15.8203 13.1952 15.8726 13.1548 15.9367C12.9701 16.2305 12.6289 16.773 12.2788 16.8934C12.0255 16.9734 11.7722 16.7868 11.9722 15.7202C12.1721 14.6536 12.9453 10.5206 12.972 10.3606C12.9987 10.2006 12.932 10.1206 12.892 10.0806C12.8387 10.0273 12.7454 9.97397 12.5854 10.014C12.5587 10.0273 11.9855 10.2006 11.4123 10.3739L10.3191 10.7206C10.0792 10.7872 9.95918 10.9872 10.0125 11.2005C10.0392 11.3072 10.1058 11.4139 10.1991 11.4672C10.2925 11.5338 10.3991 11.5472 10.5058 11.5205C10.5591 11.5072 10.6657 11.4805 10.7857 11.4405C10.8257 11.4272 10.8657 11.4172 10.9057 11.4072C10.9457 11.3972 10.9857 11.3872 11.0257 11.3739C10.8657 12.2138 10.2258 15.4002 10.2258 15.4002C10.0925 16.1601 10.0525 16.6801 10.1325 17.0134C10.2258 17.4 10.4524 17.68 10.8124 17.8533C11.0123 17.9333 11.2256 17.9867 11.4523 18C11.6256 18 11.7989 17.9867 11.9988 17.9467C12.7454 17.8 13.2519 17.2534 13.4919 16.9334C13.7185 16.6401 13.8652 16.3468 13.9585 16.1468C14.0518 15.9468 13.9851 15.7335 13.7852 15.6269Z"
          fill="currentColor"
        />
        <path
          d="M12.0498 9C12.7402 9 13.2998 8.44036 13.2998 7.75C13.2998 7.05964 12.7402 6.5 12.0498 6.5C11.3594 6.5 10.7998 7.05964 10.7998 7.75C10.7998 8.44036 11.3594 9 12.0498 9Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 3.33333C7.21353 3.33333 3.33333 7.21353 3.33333 12C3.33333 16.7865 7.21353 20.6667 12 20.6667C16.7865 20.6667 20.6667 16.7865 20.6667 12C20.6667 7.21353 16.7865 3.33333 12 3.33333Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconInfoThin);
export default ForwardRef;
