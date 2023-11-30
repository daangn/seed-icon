import * as React from 'react';
import type { SVGProps } from 'react';
interface Props {
  size: number | string;
  className?: string;
}
const SVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-seed-icon="true"
    data-seed-icon-version="0.3.15"
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.0657 17.0657C20.7533 17.3782 20.2468 17.3782 19.9344 17.0657L12 9.13142L4.06573 17.0657C3.75331 17.3782 3.24678 17.3782 2.93436 17.0657C2.62194 16.7533 2.62194 16.2468 2.93436 15.9344L11.4344 7.43436C11.7468 7.12194 12.2533 7.12194 12.5657 7.43436L21.0657 15.9344C21.3782 16.2468 21.3782 16.7533 21.0657 17.0657Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const IconExpandLessRegular = (
  { size, className }: Props,
  ref: React.ForwardedRef<HTMLSpanElement>
) => {
  return (
    <span
      ref={ref}
      className={className}
      style={{
        display: 'inline-flex',
        width: size,
        height: size,
      }}
    >
      <SVG />
    </span>
  );
};
export default React.forwardRef(IconExpandLessRegular);
