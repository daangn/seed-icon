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
        d="M8.8002 2.6667C8.8002 2.22487 8.44202 1.8667 8.0002 1.8667C7.55837 1.8667 7.2002 2.22487 7.2002 2.6667V3.20001H3.0002C2.55837 3.20001 2.2002 3.55818 2.2002 4.00001V19.3333C2.2002 20.8797 3.4538 22.1333 5.0002 22.1333H19.0002C20.5466 22.1333 21.8002 20.8797 21.8002 19.3333V8.00177L21.8002 8L21.8002 7.99824V4.00001C21.8002 3.55818 21.442 3.20001 21.0002 3.20001H16.8002V2.6667C16.8002 2.22487 16.442 1.8667 16.0002 1.8667C15.5584 1.8667 15.2002 2.22487 15.2002 2.6667V3.20001H8.8002V2.6667ZM3.8002 4.80001H7.2002V5.33337C7.2002 5.77519 7.55837 6.13337 8.0002 6.13337C8.44202 6.13337 8.8002 5.77519 8.8002 5.33337V4.80001H15.2002V5.33337C15.2002 5.77519 15.5584 6.13337 16.0002 6.13337C16.442 6.13337 16.8002 5.77519 16.8002 5.33337V4.80001H20.2002V7.2L3.8002 7.20001V4.80001ZM16.1577 11.4554C16.4092 11.0921 16.3186 10.5938 15.9553 10.3423C15.5921 10.0908 15.0937 10.1814 14.8422 10.5447L10.9325 16.192L8.60737 13.4794C8.31983 13.1439 7.81479 13.1051 7.47933 13.3926C7.14387 13.6802 7.10502 14.1852 7.39256 14.5207L10.3926 18.0207C10.5539 18.2089 10.7935 18.3117 11.0412 18.299C11.2888 18.2862 11.5166 18.1593 11.6577 17.9554L16.1577 11.4554Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const IconReservationFill = (
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
export default React.forwardRef(IconReservationFill);
