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
        d="M11.9999 4.2001C9.79076 4.2001 7.9999 5.99096 7.9999 8.2001C7.9999 10.4092 9.79076 12.2001 11.9999 12.2001C14.209 12.2001 15.9999 10.4092 15.9999 8.2001C15.9999 5.99096 14.209 4.2001 11.9999 4.2001ZM14.4932 13.2158C16.3347 12.2986 17.5999 10.3971 17.5999 8.2001C17.5999 5.1073 15.0927 2.6001 11.9999 2.6001C8.90711 2.6001 6.3999 5.1073 6.3999 8.2001C6.3999 10.3971 7.66507 12.2986 9.50658 13.2158C10.2574 13.5898 11.1041 13.8001 11.9999 13.8001C12.8957 13.8001 13.7424 13.5898 14.4932 13.2158ZM14.6926 14.8797C13.8632 14.6973 12.9622 14.6001 11.9999 14.6001C11.0376 14.6001 10.1366 14.6973 9.30721 14.8797C5.66195 15.6813 3.3999 18.1283 3.3999 21.2001C3.3999 21.5315 3.66853 21.8001 3.9999 21.8001H19.9999C20.3313 21.8001 20.5999 21.5315 20.5999 21.2001C20.5999 18.1283 18.3379 15.6813 14.6926 14.8797ZM5.12115 20.2001H18.8787C18.3476 18.0465 16.0698 16.2001 11.9999 16.2001C7.92998 16.2001 5.65219 18.0465 5.12115 20.2001Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const IconProfileRegular = (
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
export default React.forwardRef(IconProfileRegular);
