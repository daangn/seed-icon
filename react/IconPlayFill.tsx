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
        d="M19.4 9.57527C21.2667 10.653 21.2667 13.3473 19.4 14.425L8.90005 20.4872C7.03338 21.5649 4.70005 20.2178 4.70005 18.0623L4.70005 5.93797C4.70005 3.78253 7.03338 2.43537 8.90005 3.51309L19.4 9.57527Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const IconPlayFill = (
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
export default React.forwardRef(IconPlayFill);
