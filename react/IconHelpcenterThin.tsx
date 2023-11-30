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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.6917 8.93475C21.913 9.31453 22.7998 10.4537 22.7998 11.7999V14.2999C22.7998 15.6075 21.9633 16.7196 20.7963 17.1305C20.7989 17.1533 20.8002 17.1765 20.8002 17.2V17.6985C20.8002 19.8018 19.253 21.5522 17.2223 21.8551C17.038 22.435 16.5453 22.85 15.9665 22.85H14.6331C13.8968 22.85 13.2998 22.1784 13.2998 21.35C13.2998 20.5215 13.8968 19.85 14.6331 19.85H15.9665C16.4786 19.85 16.9232 20.1747 17.1466 20.6512C18.5466 20.3924 19.6002 19.1656 19.6002 17.6985V17.2999H17.6498V8.79993H19.463C18.9091 5.17599 15.7788 2.39995 12 2.39995C8.22125 2.39995 5.09087 5.17599 4.53703 8.79993H6.3502V17.2999H4.2002C2.54334 17.2999 1.2002 15.9568 1.2002 14.2999V11.7999C1.2002 10.4537 2.08696 9.31453 3.30826 8.93475C3.81135 4.58051 7.51089 1.19995 12 1.19995C16.4891 1.19995 20.1887 4.58051 20.6917 8.93475ZM5.1502 9.99993H4.20019C3.20608 9.99993 2.4002 10.8058 2.4002 11.7999V14.2999C2.4002 15.294 3.20608 16.0999 4.2002 16.0999H5.1502V9.99993ZM18.8498 9.99993H19.7998C20.7939 9.99993 21.5998 10.8058 21.5998 11.7999V14.2999C21.5998 15.294 20.7939 16.0999 19.7998 16.0999H18.8498V9.99993Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const IconHelpcenterThin = (
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
export default React.forwardRef(IconHelpcenterThin);
