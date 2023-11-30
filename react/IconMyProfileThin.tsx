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
        d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM18.5177 19.3186C16.7858 20.8621 14.5024 21.8 12 21.8C9.49708 21.8 7.21332 20.8617 5.48127 19.3177C6.18698 17.3662 7.81428 15.8267 9.87608 15.1833C10.1123 15.1096 10.279 14.8984 10.296 14.6516C10.3129 14.4047 10.1765 14.1728 9.95257 14.0675C8.4063 13.3408 7.34986 11.8127 7.34986 10.0658C7.34986 7.61655 9.40835 5.60002 11.9999 5.60002C14.5914 5.60002 16.6499 7.61655 16.6499 10.0658C16.6499 11.8126 15.601 13.334 14.0462 14.068C13.8226 14.1735 13.6867 14.4054 13.7038 14.6521C13.7209 14.8988 13.8876 15.1097 14.1236 15.1833C16.1845 15.8264 17.8115 17.3689 18.5177 19.3186ZM19.4345 18.3853C18.6767 16.6961 17.3223 15.3189 15.6353 14.4962C16.9806 13.4631 17.8499 11.8689 17.8499 10.0658C17.8499 6.91376 15.2133 4.40002 11.9999 4.40002C8.78637 4.40002 6.14986 6.91376 6.14986 10.0658C6.14986 11.867 7.02215 13.4648 8.3637 14.4962C6.67657 15.3184 5.32192 16.6939 4.56437 18.3839C3.09064 16.669 2.2 14.4385 2.2 12C2.2 6.58761 6.58761 2.2 12 2.2C17.4124 2.2 21.8 6.58761 21.8 12C21.8 14.4391 20.9089 16.6702 19.4345 18.3853Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const IconMyProfileThin = (
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
export default React.forwardRef(IconMyProfileThin);
