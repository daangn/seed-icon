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
    data-seed-icon-version="0.3.15"
    {...props}
  >
    <g>
      <g>
        <path
          d="M10.3001 12.5501H8.20006C8.0896 12.5501 8.00006 12.6396 8.00006 12.7501V14.8501C8.00006 14.9605 8.0896 15.0501 8.20006 15.0501H10.3001C10.4105 15.0501 10.5001 14.9605 10.5001 14.8501V12.7501C10.5001 12.6396 10.4105 12.5501 10.3001 12.5501Z"
          fill="currentColor"
        />
        <path
          d="M15.8001 12.5501H13.7001C13.5896 12.5501 13.5001 12.6396 13.5001 12.7501V14.8501C13.5001 14.9605 13.5896 15.0501 13.7001 15.0501H15.8001C15.9105 15.0501 16.0001 14.9605 16.0001 14.8501V12.7501C16.0001 12.6396 15.9105 12.5501 15.8001 12.5501Z"
          fill="currentColor"
        />
        <path
          d="M22.0601 8.16008L12.3101 2.35008C12.1201 2.24008 11.8901 2.24008 11.7001 2.35008L1.94006 8.16008C1.66006 8.33008 1.56006 8.70008 1.73006 8.98008C1.90006 9.27008 2.27006 9.36008 2.55006 9.19008L2.99006 8.93008V20.8001C2.99006 21.3501 3.44006 21.8001 3.99006 21.8001H19.9901C20.5401 21.8001 20.9901 21.3501 20.9901 20.8001V8.93008L21.4301 9.19008C21.5301 9.25008 21.6301 9.27008 21.7401 9.27008C21.9401 9.27008 22.1401 9.17008 22.2601 8.98008C22.4301 8.70008 22.3401 8.33008 22.0501 8.16008H22.0601ZM19.8001 20.5901H4.20006V8.21008L12.0001 3.57008L19.8001 8.21008V20.5901Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconHouseThin = (
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
export default React.forwardRef(IconHouseThin);
