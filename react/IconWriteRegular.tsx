import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconWriteRegular = (
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
        d="M15.4345 2.43427C15.7469 2.12185 16.2535 2.12185 16.5659 2.43427L21.5659 7.43427C21.8783 7.74669 21.8783 8.25322 21.5659 8.56564L17.5666 12.5649L17.5659 12.5656L17.5651 12.5664L8.56588 21.5656C8.41585 21.7157 8.21237 21.7999 8.0002 21.7999H3.0002C2.55837 21.7999 2.2002 21.4418 2.2002 21V16C2.2002 15.7878 2.28448 15.5843 2.43451 15.4343L15.4345 2.43427ZM19.8688 7.99995L17.0002 10.8686L14.5659 8.43427C14.2535 8.12185 13.7469 8.12185 13.4345 8.43427C13.1221 8.74669 13.1221 9.25322 13.4345 9.56564L15.8688 12L7.66882 20.2H3.8002V16.3313L16.0002 4.13132L19.8688 7.99995ZM21.0002 20.2H14.0002C13.5584 20.2 13.2002 20.5581 13.2002 21C13.2002 21.4418 13.5584 21.8 14.0002 21.8H21.0002C21.442 21.8 21.8002 21.4418 21.8002 21C21.8002 20.5581 21.442 20.2 21.0002 20.2Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconWriteRegular);
export default ForwardRef;
