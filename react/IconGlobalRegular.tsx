import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconGlobalRegular = (
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
          d="M12 2.8002C6.91893 2.8002 2.79995 6.91918 2.79995 12.0002C2.79995 17.0812 6.91893 21.2002 12 21.2002C17.081 21.2002 21.2 17.0812 21.2 12.0002C21.2 6.91918 17.081 2.8002 12 2.8002ZM1.19995 12.0002C1.19995 6.03552 6.03528 1.2002 12 1.2002C17.9646 1.2002 22.8 6.03552 22.8 12.0002C22.8 17.9649 17.9646 22.8002 12 22.8002C6.03528 22.8002 1.19995 17.9649 1.19995 12.0002Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.4618 22.5921C5.2144 16.9126 5.2144 7.08767 11.4618 1.4082L12.5381 2.59211C6.98897 7.63676 6.98897 16.3636 12.5381 21.4082L11.4618 22.5921Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5381 22.5921C18.7855 16.9126 18.7855 7.08767 12.5381 1.4082L11.4618 2.59211C17.0109 7.63676 17.0109 16.3636 11.4618 21.4082L12.5381 22.5921Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.69995 9.0002C1.69995 8.55837 2.05812 8.2002 2.49995 8.2002H21.5C21.9418 8.2002 22.2999 8.55837 22.2999 9.0002C22.2999 9.44202 21.9418 9.8002 21.5 9.8002H2.49995C2.05812 9.8002 1.69995 9.44202 1.69995 9.0002Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.69995 15.0002C1.69995 14.5584 2.05812 14.2002 2.49995 14.2002H21.5C21.9418 14.2002 22.2999 14.5584 22.2999 15.0002C22.2999 15.442 21.9418 15.8002 21.5 15.8002H2.49995C2.05812 15.8002 1.69995 15.442 1.69995 15.0002Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconGlobalRegular);
export default ForwardRef;
