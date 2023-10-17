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
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 6.48852C10.0031 6.48852 8.38442 8.10725 8.38442 10.1041C8.38442 12.1009 10.0031 13.7196 12 13.7196C13.9968 13.7196 15.6155 12.1009 15.6155 10.1041C15.6155 8.10725 13.9968 6.48852 12 6.48852ZM9.90675 10.1041C9.90675 8.94801 10.8439 8.01085 12 8.01085C13.156 8.01085 14.0932 8.94801 14.0932 10.1041C14.0932 11.2601 13.156 12.1973 12 12.1973C10.8439 12.1973 9.90675 11.2601 9.90675 10.1041Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 0.779785C6.58756 0.779785 2.19995 5.16739 2.19995 10.5798C2.19995 13.9799 4.40138 17.1391 6.57819 19.3764C7.68247 20.5113 8.81823 21.4481 9.74627 22.1055C10.2096 22.4337 10.6305 22.6988 10.9774 22.8857C11.1501 22.9788 11.3156 23.0584 11.466 23.1169C11.594 23.1666 11.7918 23.2342 12 23.2342C12.2081 23.2342 12.4059 23.1666 12.5339 23.1169C12.6843 23.0584 12.8498 22.9788 13.0225 22.8857C13.3694 22.6988 13.7903 22.4337 14.2536 22.1055C15.1817 21.4481 16.3174 20.5113 17.4217 19.3764C19.5985 17.1391 21.8 13.9799 21.8 10.5798C21.8 5.16739 17.4123 0.779785 12 0.779785ZM3.72228 10.5798C3.72228 6.00815 7.42832 2.30212 12 2.30212C16.5716 2.30212 20.2776 6.00815 20.2776 10.5798C20.2776 13.3642 18.4353 16.1516 16.3306 18.3148C15.2941 19.3801 14.2296 20.2569 13.3737 20.8632C12.945 21.1669 12.578 21.396 12.3005 21.5455C12.1718 21.6149 12.0717 21.662 12 21.691C11.9282 21.662 11.8281 21.6149 11.6994 21.5455C11.4219 21.396 11.0549 21.1669 10.6262 20.8632C9.77026 20.2569 8.70578 19.3801 7.66928 18.3148C5.56456 16.1516 3.72228 13.3642 3.72228 10.5798Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconLocationRegular = (
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
export default React.forwardRef(IconLocationRegular);
