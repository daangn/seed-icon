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
          d="M21.6074 15.7056C22.0462 16.0411 22.1298 16.6687 21.7944 17.1075L17.5885 22.6075C17.3999 22.854 17.1076 22.999 16.7972 23C16.4869 23.001 16.1936 22.8578 16.0036 22.6124L13.7094 19.6509C13.3712 19.2142 13.451 18.5861 13.8876 18.2479C14.3242 17.9097 14.9523 17.9895 15.2906 18.4261L16.789 20.3605L20.2056 15.8926C20.5411 15.4538 21.1687 15.3702 21.6074 15.7056Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V12C22 12.5523 21.5523 13 21 13C20.4477 13 20 12.5523 20 12V4C20 3.44772 19.5523 3 19 3H5C4.44772 3 4 3.44772 4 4V20C4 20.5523 4.44772 21 5 21H11.9C12.4523 21 12.9 21.4477 12.9 22C12.9 22.5523 12.4523 23 11.9 23H5C3.34315 23 2 21.6569 2 20V4Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 7C7 6.44772 7.44772 6 8 6H16C16.5523 6 17 6.44772 17 7C17 7.55228 16.5523 8 16 8H8C7.44772 8 7 7.55228 7 7Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 11C7 10.4477 7.44772 10 8 10H16C16.5523 10 17 10.4477 17 11C17 11.5523 16.5523 12 16 12H8C7.44772 12 7 11.5523 7 11Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 15C7 14.4477 7.44772 14 8 14H13C13.5523 14 14 14.4477 14 15C14 15.5523 13.5523 16 13 16H8C7.44772 16 7 15.5523 7 15Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconListCheckFill = (
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
export default React.forwardRef(IconListCheckFill);
