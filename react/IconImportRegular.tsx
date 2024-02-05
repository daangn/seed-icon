import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconImportRegular = (
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
          d="M2 3.60005C2 2.05365 3.2536 0.800049 4.8 0.800049H18.8C20.3464 0.800049 21.6 2.05365 21.6 3.60005V11.6C21.6 12.0419 21.2418 12.4 20.8 12.4C20.3582 12.4 20 12.0419 20 11.6V3.60005C20 2.93731 19.4627 2.40005 18.8 2.40005H4.8C4.13726 2.40005 3.6 2.93731 3.6 3.60005V19.6C3.6 20.2628 4.13726 20.8 4.8 20.8H12.8C13.2418 20.8 13.6 21.1582 13.6 21.6C13.6 22.0419 13.2418 22.4 12.8 22.4H4.8C3.2536 22.4 2 21.1464 2 19.6V3.60005Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 6.60005C7 6.15822 7.35817 5.80005 7.8 5.80005H15.8C16.2418 5.80005 16.6 6.15822 16.6 6.60005C16.6 7.04188 16.2418 7.40005 15.8 7.40005H7.8C7.35817 7.40005 7 7.04188 7 6.60005Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 10.6C7 10.1582 7.35817 9.80005 7.8 9.80005H15.8C16.2418 9.80005 16.6 10.1582 16.6 10.6C16.6 11.0419 16.2418 11.4 15.8 11.4H7.8C7.35817 11.4 7 11.0419 7 10.6Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 14.6C7 14.1582 7.35817 13.8 7.8 13.8H11.8C12.2418 13.8 12.6 14.1582 12.6 14.6C12.6 15.0419 12.2418 15.4 11.8 15.4H7.8C7.35817 15.4 7 15.0419 7 14.6Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.5 18.6C15.5 18.1582 15.8582 17.8 16.3 17.8H20.8C21.2418 17.8 21.6 18.1582 21.6 18.6C21.6 19.0419 21.2418 19.4 20.8 19.4H16.3C15.8582 19.4 15.5 19.0419 15.5 18.6Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.3658 15.0344C18.0534 14.7219 17.5468 14.7219 17.2344 15.0344L14.2344 18.0344C13.922 18.3468 13.922 18.8533 14.2344 19.1657L17.2344 22.1657C17.5468 22.4782 18.0534 22.4782 18.3658 22.1657C18.6782 21.8533 18.6782 21.3468 18.3658 21.0344L15.9315 18.6L18.3658 16.1657C18.6782 15.8533 18.6782 15.3468 18.3658 15.0344Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconImportRegular);
export default ForwardRef;
