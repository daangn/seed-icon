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
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.45728 15C4.45728 15.2761 4.68113 15.5 4.95728 15.5H19.043C19.3191 15.5 19.543 15.2761 19.543 15V11.3848C19.543 6.91542 16.1503 3.26172 12.0001 3.26172C7.84999 3.26172 4.45728 6.91542 4.45728 11.3848V15ZM11.3142 6.46185C11.3142 6.05401 11.6212 5.72339 11.9999 5.72339C14.4882 5.72339 16.7325 7.68833 17.1335 10.2789C17.1957 10.6812 16.9434 11.0617 16.5698 11.1287C16.1962 11.1958 15.8429 10.924 15.7807 10.5217C15.4959 8.68152 13.8545 7.20031 11.9999 7.20031C11.6212 7.20031 11.3142 6.86969 11.3142 6.46185ZM16.5999 13.2999C16.9865 13.2999 17.2999 12.9865 17.2999 12.5999C17.2999 12.2133 16.9865 11.8999 16.5999 11.8999C16.2133 11.8999 15.8999 12.2133 15.8999 12.5999C15.8999 12.9865 16.2133 13.2999 16.5999 13.2999Z"
          fill="currentColor"
        />
        <path
          d="M3.32273 17.7384C3.32273 17.3335 3.6254 17.0046 4.00041 17L4.00808 17H20.0081C20.009 17 20.0093 16.9709 20.0096 16.9419C20.0102 16.8837 20.0108 16.8257 20.0162 17C20.3913 17.0044 20.6942 17.3333 20.6942 17.7384L20.6861 20.0003C20.6861 20.4081 20.3791 20.7387 20.0004 20.7387H4.00041C3.6217 20.7387 3.3147 20.4081 3.3147 20.0003L3.32273 17.7384Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconReportFill = (
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
export default React.forwardRef(IconReportFill);
