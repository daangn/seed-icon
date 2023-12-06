import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconEditRegular = (
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
    data-seed-icon-version="0.5.2"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5659 2.43427C16.2535 2.12185 15.7469 2.12185 15.4345 2.43427L2.43451 15.4343C2.28448 15.5843 2.2002 15.7878 2.2002 16V21C2.2002 21.4418 2.55837 21.7999 3.0002 21.7999H8.0002C8.21237 21.7999 8.41585 21.7157 8.56588 21.5656L17.5659 12.5656L21.5659 8.56564C21.8783 8.25322 21.8783 7.74669 21.5659 7.43427L16.5659 2.43427ZM17.0002 10.8686L19.8688 7.99995L16.0002 4.13132L3.8002 16.3313V20.2H7.66882L15.8688 12L13.4345 9.56564C13.1221 9.25322 13.1221 8.74669 13.4345 8.43427C13.7469 8.12185 14.2535 8.12185 14.5659 8.43427L17.0002 10.8686Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconEditRegular);
export default ForwardRef;
