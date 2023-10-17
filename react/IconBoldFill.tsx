import * as React from 'react';
import type { SVGProps } from 'react';
interface Props {
  size?: number | string;
  className?: string;
}
const SVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-seed-icon="true"
    data-seed-icon-version="0.3.11"
    width="100%"
    height="100%"
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 3C6.44772 3 6 3.44772 6 4V20C6 20.5523 6.44772 21 7 21H13.0851C15.7995 21 18 18.7995 18 16.0851C18 14.1975 16.9715 12.5502 15.4444 11.6728C16.4018 10.776 17 9.50041 17 8.08511C17 5.27668 14.7233 3 11.9149 3H7ZM12.0851 11C13.695 11 15 9.69496 15 8.08511C15 6.38125 13.6188 5 11.9149 5H8V11H12.0851ZM8 13V19H13.0851C14.695 19 16 17.695 16 16.0851C16 14.3812 14.6188 13 12.9149 13H8Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const IconBoldFill = (
  { size = 24, className }: Props,
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
export default React.forwardRef(IconBoldFill);
