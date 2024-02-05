import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconHelperRegular = (
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
          d="M1.19971 12.0002C1.19971 6.03552 6.03503 1.2002 11.9997 1.2002C17.9644 1.2002 22.7997 6.03552 22.7997 12.0002V16.0002C22.7997 16.7829 22.3003 17.4484 21.6032 17.6965C21.0136 19.1685 19.7898 20.3949 18.239 21.2672C16.5199 22.2342 14.3454 22.8002 11.9997 22.8002C11.5579 22.8002 11.1997 22.442 11.1997 22.0002C11.1997 21.5583 11.5579 21.2002 11.9997 21.2002C14.097 21.2002 15.997 20.6926 17.4545 19.8727C18.4937 19.2882 19.2822 18.5612 19.777 17.7688C19.4435 17.6723 19.1997 17.3647 19.1997 17.0002V12.0002C19.1997 11.5584 19.5579 11.2002 19.9997 11.2002H21.1654C20.7601 6.49386 16.8112 2.8002 11.9997 2.8002C7.18823 2.8002 3.2393 6.49386 2.834 11.2002H3.99971C4.44153 11.2002 4.79971 11.5584 4.79971 12.0002V17.0002C4.79971 17.442 4.44153 17.8002 3.99971 17.8002H2.99971C2.00559 17.8002 1.19971 16.9943 1.19971 16.0002V12.0002ZM2.79971 12.8002V16.0002C2.79971 16.1107 2.88925 16.2002 2.99971 16.2002H3.19971V12.8002H2.79971ZM20.7998 12.8002V16.2002H20.9825L21.0075 16.2C21.1143 16.196 21.1998 16.1081 21.1998 16.0002V12.8002H20.7998Z"
          fill="currentColor"
        />
        <path
          d="M8.19971 11.0002C8.19971 10.5584 8.55788 10.2002 8.99971 10.2002C9.44153 10.2002 9.79971 10.5584 9.79971 11.0002V12.0002C9.79971 12.442 9.44153 12.8002 8.99971 12.8002C8.55788 12.8002 8.19971 12.442 8.19971 12.0002V11.0002Z"
          fill="currentColor"
        />
        <path
          d="M14.9997 10.2002C14.5579 10.2002 14.1997 10.5584 14.1997 11.0002V12.0002C14.1997 12.442 14.5579 12.8002 14.9997 12.8002C15.4415 12.8002 15.7997 12.442 15.7997 12.0002V11.0002C15.7997 10.5584 15.4415 10.2002 14.9997 10.2002Z"
          fill="currentColor"
        />
        <path
          d="M8.19971 14.0002C8.19971 13.5584 8.55788 13.2002 8.99971 13.2002C9.44153 13.2002 9.79971 13.5584 9.79971 14.0002C9.79971 15.2152 10.7847 16.2002 11.9997 16.2002C13.2147 16.2002 14.1997 15.2152 14.1997 14.0002C14.1997 13.5584 14.5579 13.2002 14.9997 13.2002C15.4415 13.2002 15.7997 13.5584 15.7997 14.0002C15.7997 16.0989 14.0984 17.8002 11.9997 17.8002C9.90102 17.8002 8.19971 16.0989 8.19971 14.0002Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconHelperRegular);
export default ForwardRef;
