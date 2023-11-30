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
          d="M11.9999 6.68295C10.1101 6.68295 8.57812 8.21493 8.57812 10.1047C8.57812 11.9945 10.1101 13.5265 11.9999 13.5265C13.8897 13.5265 15.4217 11.9945 15.4217 10.1047C15.4217 8.21493 13.8897 6.68295 11.9999 6.68295ZM9.71871 10.1047C9.71871 8.84487 10.74 7.82354 11.9999 7.82354C13.2598 7.82354 14.2811 8.84487 14.2811 10.1047C14.2811 11.3646 13.2598 12.3859 11.9999 12.3859C10.74 12.3859 9.71871 11.3646 9.71871 10.1047Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9999 0.97998C6.69797 0.97998 2.3999 5.27805 2.3999 10.58C2.3999 13.8997 4.55425 17.0093 6.71987 19.2351C7.81457 20.3602 8.94028 21.2886 9.85838 21.9389C10.3169 22.2637 10.7306 22.5241 11.0685 22.7061C11.2369 22.7968 11.3948 22.8726 11.5353 22.9272C11.6588 22.9752 11.8289 23.0315 11.9999 23.0315C12.1709 23.0315 12.341 22.9752 12.4645 22.9272C12.605 22.8726 12.7629 22.7968 12.9313 22.7061C13.2692 22.5241 13.6829 22.2637 14.1414 21.9389C15.0595 21.2886 16.1852 20.3602 17.2799 19.2351C19.4456 17.0093 21.5999 13.8997 21.5999 10.58C21.5999 5.27805 17.3018 0.97998 11.9999 0.97998ZM3.5405 10.58C3.5405 5.90798 7.3279 2.12057 11.9999 2.12057C16.6719 2.12057 20.4593 5.90798 20.4593 10.58C20.4593 13.4384 18.5741 16.2694 16.4624 18.4397C15.4185 19.5126 14.3462 20.3961 13.4821 21.0082C13.0496 21.3146 12.6762 21.548 12.3903 21.702C12.2468 21.7793 12.1336 21.8321 12.0514 21.864C12.0299 21.8724 12.0129 21.8784 11.9999 21.8826C11.9869 21.8784 11.9699 21.8724 11.9484 21.864C11.8662 21.8321 11.753 21.7793 11.6095 21.702C11.3236 21.548 10.9502 21.3146 10.5177 21.0082C9.65358 20.3961 8.58128 19.5126 7.53736 18.4397C5.42575 16.2694 3.5405 13.4384 3.5405 10.58Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconLocationThin = (
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
export default React.forwardRef(IconLocationThin);
